package com.etopath.backend.service;

import com.etopath.backend.dto.CourseDto;
import com.etopath.backend.exception.ResourceNotFoundException;
import com.etopath.backend.model.Course;
import com.etopath.backend.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;

    @Transactional(readOnly = true)
    public List<CourseDto> getAllCourses() {
        List<Course> courses = courseRepository.findAllWithDetails();
        return courses.stream()
                .map(CourseDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CourseDto getCourseById(String id) {
        Course course = courseRepository.findByIdWithDetails(id);
        if (course == null) {
            throw new ResourceNotFoundException("Course", "id", id);
        }
        return CourseDto.fromEntity(course);
    }
}