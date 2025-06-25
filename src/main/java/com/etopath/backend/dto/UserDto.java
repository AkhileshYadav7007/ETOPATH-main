package com.etopath.backend.dto;

import com.etopath.backend.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String whatsapp;
    private String address;
    private String city;
    private String state;
    private String pincode;
    private String role;
    
    public static UserDto fromEntity(User user) {
        return UserDto.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .whatsapp(user.getWhatsapp())
                .address(user.getAddress())
                .city(user.getCity())
                .state(user.getState())
                .pincode(user.getPincode())
                .role(user.getRole().name())
                .build();
    }
}