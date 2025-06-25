package com.etopath.backend.repository;

import com.etopath.backend.model.Order;
import com.etopath.backend.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    
    List<Payment> findByOrderOrderByCreatedAtDesc(Order order);
    
    Optional<Payment> findByRazorpayPaymentId(String razorpayPaymentId);
}