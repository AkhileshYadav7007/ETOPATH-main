package com.etopath.backend.repository;

import com.etopath.backend.model.Course;
import com.etopath.backend.model.Enrollment;
import com.etopath.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    
    List<Enrollment> findByUserOrderByCreatedAtDesc(User user);
    
    Optional<Enrollment> findByUserAndCourse(User user, Course course);
    
    @Query("SELECT e FROM Enrollment e JOIN FETCH e.course WHERE e.user.id = :userId")
    List<Enrollment> findByUserIdWithCourses(Long userId);
}