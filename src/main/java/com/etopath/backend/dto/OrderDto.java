package com.etopath.backend.dto;

import com.etopath.backend.model.Order;
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
public class OrderDto {
    private Long id;
    private String orderNumber;
    private Long userId;
    private String courseId;
    private String courseName;
    private BigDecimal amount;
    private String currency;
    private String status;
    private String razorpayOrderId;
    private LocalDateTime createdAt;
    
    public static OrderDto fromEntity(Order order) {
        return OrderDto.builder()
                .id(order.getId())
                .orderNumber(order.getOrderNumber())
                .userId(order.getUser().getId())
                .courseId(order.getCourse().getId())
                .courseName(order.getCourse().getName())
                .amount(order.getAmount())
                .currency(order.getCurrency())
                .status(order.getStatus().name())
                .razorpayOrderId(order.getRazorpayOrderId())
                .createdAt(order.getCreatedAt())
                .build();
    }
}