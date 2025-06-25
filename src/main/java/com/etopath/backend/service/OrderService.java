package com.etopath.backend.service;

import com.etopath.backend.dto.OrderDto;
import com.etopath.backend.dto.request.OrderRequest;
import com.etopath.backend.dto.response.OrderResponse;
import com.etopath.backend.exception.BadRequestException;
import com.etopath.backend.exception.ResourceNotFoundException;
import com.etopath.backend.model.*;
import com.etopath.backend.repository.CourseRepository;
import com.etopath.backend.repository.OrderRepository;
import com.etopath.backend.repository.UserRepository;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final RazorpayClient razorpayClient;
    private final PasswordEncoder passwordEncoder;

    @Value("${razorpay.currency}")
    private String currency;

    @Value("${razorpay.key.id}")
    private String razorpayKeyId;

    @Value("${razorpay.company.name}")
    private String companyName;

    @Transactional
    public OrderResponse createOrder(OrderRequest orderRequest) {
        try {
            // Get course details
            Course course = courseRepository.findById(orderRequest.getCourseId())
                    .orElseThrow(() -> new ResourceNotFoundException("Course", "id", orderRequest.getCourseId()));

            // Check if user exists or create a new one
            User user = userRepository.findByEmail(orderRequest.getEmail())
                    .orElseGet(() -> createNewUser(orderRequest));

            // Create business info if not exists
            if (user.getBusinessInfo() == null) {
                UserBusinessInfo businessInfo = UserBusinessInfo.builder()
                        .user(user)
                        .experienceLevel(orderRequest.getExperience())
                        .currentBusiness(orderRequest.getCurrentBusiness())
                        .goals(orderRequest.getGoals())
                        .build();
                user.setBusinessInfo(businessInfo);
                userRepository.save(user);
            }

            // Generate unique order number
            String orderNumber = generateOrderNumber();

            // Create order in our system
            Order order = Order.builder()
                    .orderNumber(orderNumber)
                    .user(user)
                    .course(course)
                    .amount(course.getFee())
                    .currency(currency)
                    .status(Order.OrderStatus.CREATED)
                    .build();

            Order savedOrder = orderRepository.save(order);

            // Create order in Razorpay
            JSONObject razorpayOrderRequest = new JSONObject();
            razorpayOrderRequest.put("amount", course.getFee().multiply(new BigDecimal("100")).intValue()); // Amount in paise
            razorpayOrderRequest.put("currency", currency);
            razorpayOrderRequest.put("receipt", orderNumber);

            com.razorpay.Order razorpayOrder = razorpayClient.orders.create(razorpayOrderRequest);

            // Update our order with Razorpay order ID
            savedOrder.setRazorpayOrderId(razorpayOrder.get("id"));
            orderRepository.save(savedOrder);

            // Build response
            return OrderResponse.builder()
                    .id(razorpayOrder.get("id"))
                    .amount(course.getFee())
                    .currency(currency)
                    .receipt(orderNumber)
                    .status(razorpayOrder.get("status"))
                    .keyId(razorpayKeyId)
                    .name(companyName)
                    .description(course.getName() + " - eCommerce Training Course")
                    .image("https://your-logo-url.png") // Replace with actual logo URL
                    .prefillName(orderRequest.getFirstName() + " " + orderRequest.getLastName())
                    .prefillEmail(orderRequest.getEmail())
                    .prefillContact(orderRequest.getPhone())
                    .theme("#2563eb")
                    .build();

        } catch (RazorpayException e) {
            log.error("Error creating Razorpay order", e);
            throw new BadRequestException("Failed to create payment order: " + e.getMessage());
        }
    }

    @Transactional(readOnly = true)
    public List<OrderDto> getUserOrders(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        List<Order> orders = orderRepository.findByUserOrderByCreatedAtDesc(user);
        return orders.stream()
                .map(OrderDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public OrderDto getOrderById(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order", "id", id));
        return OrderDto.fromEntity(order);
    }

    @Transactional(readOnly = true)
    public OrderDto getOrderByRazorpayOrderId(String razorpayOrderId) {
        Order order = orderRepository.findByRazorpayOrderId(razorpayOrderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order", "razorpayOrderId", razorpayOrderId));
        return OrderDto.fromEntity(order);
    }

    private User createNewUser(OrderRequest request) {
        // Generate a random password for the user
        String randomPassword = UUID.randomUUID().toString().substring(0, 8);
        
        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(randomPassword))
                .phone(request.getPhone())
                .whatsapp(request.getWhatsapp())
                .address(request.getAddress())
                .city(request.getCity())
                .state(request.getState())
                .pincode(request.getPincode())
                .role(User.Role.USER)
                .build();

        return userRepository.save(user);
        
        // In a real application, you would send an email to the user with their password
        // or a password reset link
    }

    private String generateOrderNumber() {
        return "ORD" + System.currentTimeMillis();
    }
}