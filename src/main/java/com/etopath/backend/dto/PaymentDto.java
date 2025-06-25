package com.etopath.backend.dto;

import com.etopath.backend.model.Payment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDto {
    private Long id;
    private Long orderId;
    private String orderNumber;
    private String razorpayPaymentId;
    private BigDecimal amount;
    private String status;
    private String paymentMethod;
    private LocalDateTime paymentDate;
    
    public static PaymentDto fromEntity(Payment payment) {
        return PaymentDto.builder()
                .id(payment.getId())
                .orderId(payment.getOrder().getId())
                .orderNumber(payment.getOrder().getOrderNumber())
                .razorpayPaymentId(payment.getRazorpayPaymentId())
                .amount(payment.getAmount())
                .status(payment.getStatus().name())
                .paymentMethod(payment.getPaymentMethod())
                .paymentDate(payment.getPaymentDate())
                .build();
    }
}