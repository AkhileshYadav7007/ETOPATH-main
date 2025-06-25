package com.etopath.backend.controller;

import com.etopath.backend.dto.OrderDto;
import com.etopath.backend.dto.request.OrderRequest;
import com.etopath.backend.dto.response.ApiResponse;
import com.etopath.backend.dto.response.OrderResponse;
import com.etopath.backend.security.JwtTokenProvider;
import com.etopath.backend.service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final JwtTokenProvider tokenProvider;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<OrderResponse>> createOrder(@Valid @RequestBody OrderRequest orderRequest) {
        OrderResponse response = orderService.createOrder(orderRequest);
        return ResponseEntity.ok(ApiResponse.success("Order created successfully", response));
    }

    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ApiResponse<List<OrderDto>>> getUserOrders(@RequestHeader("Authorization") String token) {
        token = token.substring(7); // Remove "Bearer " prefix
        Long userId = tokenProvider.getUserIdFromToken(token);
        List<OrderDto> orders = orderService.getUserOrders(userId);
        return ResponseEntity.ok(ApiResponse.success(orders));
    }

    @GetMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ApiResponse<OrderDto>> getOrderById(@PathVariable Long id) {
        OrderDto order = orderService.getOrderById(id);
        return ResponseEntity.ok(ApiResponse.success(order));
    }

    @GetMapping("/razorpay/{razorpayOrderId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ApiResponse<OrderDto>> getOrderByRazorpayOrderId(@PathVariable String razorpayOrderId) {
        OrderDto order = orderService.getOrderByRazorpayOrderId(razorpayOrderId);
        return ResponseEntity.ok(ApiResponse.success(order));
    }
}