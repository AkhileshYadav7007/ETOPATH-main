package com.etopath.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentVerificationResponse {
    private boolean success;
    private String message;
    private String orderId;
    private String paymentId;
    private String orderNumber;
}