package com.etopath.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentVerificationRequest {
    
    @NotBlank(message = "Razorpay order ID is required")
    private String razorpay_order_id;
    
    @NotBlank(message = "Razorpay payment ID is required")
    private String razorpay_payment_id;
    
    @NotBlank(message = "Razorpay signature is required")
    private String razorpay_signature;
}