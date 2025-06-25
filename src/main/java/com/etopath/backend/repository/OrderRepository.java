package com.etopath.backend.repository;

import com.etopath.backend.model.Order;
import com.etopath.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    
    List<Order> findByUserOrderByCreatedAtDesc(User user);
    
    Optional<Order> findByOrderNumber(String orderNumber);
    
    Optional<Order> findByRazorpayOrderId(String razorpayOrderId);
    
    @Query("SELECT o FROM Order o LEFT JOIN FETCH o.payments WHERE o.id = :id")
    Optional<Order> findByIdWithPayments(Long id);
}