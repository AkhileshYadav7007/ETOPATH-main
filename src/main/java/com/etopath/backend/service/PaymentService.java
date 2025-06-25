package com.etopath.backend.service;

import com.etopath.backend.dto.PaymentDto;
import com.etopath.backend.dto.request.PaymentVerificationRequest;
import com.etopath.backend.dto.response.PaymentVerificationResponse;
import com.etopath.backend.exception.PaymentVerificationException;
import com.etopath.backend.exception.ResourceNotFoundException;
import com.etopath.backend.model.Enrollment;
import com.etopath.backend.model.Order;
import com.etopath.backend.model.Payment;
import com.etopath.backend.repository.EnrollmentRepository;
import com.etopath.backend.repository.OrderRepository;
import com.etopath.backend.repository.PaymentRepository;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final OrderRepository orderRepository;
    private final EnrollmentRepository enrollmentRepository;

    @Value("${razorpay.key.secret}")
    private String razorpayKeySecret;

    @Transactional
    public PaymentVerificationResponse verifyPayment(PaymentVerificationRequest request) {
        try {
            // Verify signature
            String data = request.getRazorpay_order_id() + "|" + request.getRazorpay_payment_id();
            boolean isValidSignature = Utils.verifySignature(data, request.getRazorpay_signature(), razorpayKeySecret);

            if (!isValidSignature) {
                throw new PaymentVerificationException("Payment verification failed: Invalid signature");
            }

            // Get order details
            Order order = orderRepository.findByRazorpayOrderId(request.getRazorpay_order_id())
                    .orElseThrow(() -> new ResourceNotFoundException("Order", "razorpayOrderId", request.getRazorpay_order_id()));

            // Create payment record
            Payment payment = Payment.builder()
                    .order(order)
                    .razorpayPaymentId(request.getRazorpay_payment_id())
                    .razorpaySignature(request.getRazorpay_signature())
                    .amount(order.getAmount())
                    .status(Payment.PaymentStatus.COMPLETED)
                    .paymentMethod("Razorpay")
                    .paymentDate(LocalDateTime.now())
                    .build();

            paymentRepository.save(payment);

            // Update order status
            order.setStatus(Order.OrderStatus.PAID);
            orderRepository.save(order);

            // Create enrollment
            Enrollment enrollment = Enrollment.builder()
                    .user(order.getUser())
                    .course(order.getCourse())
                    .order(order)
                    .status(Enrollment.EnrollmentStatus.ACTIVE)
                    .enrollmentDate(LocalDateTime.now())
                    .build();

            enrollmentRepository.save(enrollment);

            return PaymentVerificationResponse.builder()
                    .success(true)
                    .message("Payment verified successfully")
                    .orderId(order.getRazorpayOrderId())
                    .paymentId(payment.getRazorpayPaymentId())
                    .orderNumber(order.getOrderNumber())
                    .build();

        } catch (RazorpayException e) {
            log.error("Razorpay exception during payment verification", e);
            throw new PaymentVerificationException("Payment verification failed: " + e.getMessage(), e);
        }
    }

    @Transactional(readOnly = true)
    public List<PaymentDto> getPaymentsByOrderId(Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order", "id", orderId));

        List<Payment> payments = paymentRepository.findByOrderOrderByCreatedAtDesc(order);
        return payments.stream()
                .map(PaymentDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public PaymentDto getPaymentById(Long id) {
        Payment payment = paymentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Payment", "id", id));
        return PaymentDto.fromEntity(payment);
    }
}