package com.etopath.backend.repository;

import com.etopath.backend.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, String> {
    
    @Query("SELECT c FROM Course c LEFT JOIN FETCH c.features LEFT JOIN FETCH c.marketplaces")
    List<Course> findAllWithDetails();
    
    @Query("SELECT c FROM Course c LEFT JOIN FETCH c.features LEFT JOIN FETCH c.marketplaces WHERE c.id = :id")
    Course findByIdWithDetails(String id);
}