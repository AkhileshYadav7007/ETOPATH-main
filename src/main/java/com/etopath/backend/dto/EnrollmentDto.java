package com.etopath.backend.dto;

import com.etopath.backend.model.Enrollment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EnrollmentDto {
    private Long id;
    private Long userId;
    private String courseId;
    private String courseName;
    private String status;
    private LocalDateTime enrollmentDate;
    private LocalDateTime completionDate;
    
    public static EnrollmentDto fromEntity(Enrollment enrollment) {
        return EnrollmentDto.builder()
                .id(enrollment.getId())
                .userId(enrollment.getUser().getId())
                .courseId(enrollment.getCourse().getId())
                .courseName(enrollment.getCourse().getName())
                .status(enrollment.getStatus().name())
                .enrollmentDate(enrollment.getEnrollmentDate())
                .completionDate(enrollment.getCompletionDate())
                .build();
    }
}