package com.etopath.backend.service;

import com.etopath.backend.dto.EnrollmentDto;
import com.etopath.backend.exception.ResourceNotFoundException;
import com.etopath.backend.model.Enrollment;
import com.etopath.backend.model.User;
import com.etopath.backend.repository.EnrollmentRepository;
import com.etopath.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EnrollmentService {

    private final EnrollmentRepository enrollmentRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<EnrollmentDto> getUserEnrollments(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        List<Enrollment> enrollments = enrollmentRepository.findByUserOrderByCreatedAtDesc(user);
        return enrollments.stream()
                .map(EnrollmentDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public EnrollmentDto getEnrollmentById(Long id) {
        Enrollment enrollment = enrollmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Enrollment", "id", id));
        return EnrollmentDto.fromEntity(enrollment);
    }

    @Transactional(readOnly = true)
    public List<EnrollmentDto> getUserEnrollmentsWithCourses(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException("User", "id", userId);
        }

        List<Enrollment> enrollments = enrollmentRepository.findByUserIdWithCourses(userId);
        return enrollments.stream()
                .map(EnrollmentDto::fromEntity)
                .collect(Collectors.toList());
    }
}