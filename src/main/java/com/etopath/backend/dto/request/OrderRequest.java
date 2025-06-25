package com.etopath.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {
    
    @NotBlank(message = "Course ID is required")
    private String courseId;
    
    @NotBlank(message = "First name is required")
    private String firstName;
    
    @NotBlank(message = "Last name is required")
    private String lastName;
    
    @NotBlank(message = "Email is required")
    private String email;
    
    @NotBlank(message = "Phone is required")
    @Pattern(regexp = "^[6-9]\\d{9}$", message = "Please enter a valid 10-digit phone number")
    private String phone;
    
    private String whatsapp;
    
    @NotBlank(message = "Address is required")
    private String address;
    
    @NotBlank(message = "City is required")
    private String city;
    
    @NotBlank(message = "State is required")
    private String state;
    
    @NotBlank(message = "Pincode is required")
    @Pattern(regexp = "^\\d{6}$", message = "Please enter a valid 6-digit pincode")
    private String pincode;
    
    @NotBlank(message = "Experience level is required")
    private String experience;
    
    private String currentBusiness;
    
    private String goals;
    
    @NotNull(message = "Terms agreement is required")
    private Boolean agreeTerms;
    
    private Boolean agreeMarketing;
}