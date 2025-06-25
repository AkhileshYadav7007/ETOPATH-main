package com.etopath.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {
    private String id;
    private BigDecimal amount;
    private String currency;
    private String receipt;
    private String status;
    private String keyId;
    private String name;
    private String description;
    private String image;
    private String prefillName;
    private String prefillEmail;
    private String prefillContact;
    private String theme;
}