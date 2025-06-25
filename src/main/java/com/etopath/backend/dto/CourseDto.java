package com.etopath.backend.dto;

import com.etopath.backend.model.Course;
import com.etopath.backend.model.CourseFeature;
import com.etopath.backend.model.CourseMarketplace;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseDto {
    private String id;
    private String name;
    private String description;
    private String duration;
    private BigDecimal fee;
    private BigDecimal originalPrice;
    private String level;
    private List<String> features;
    private List<String> marketplaces;
    
    public static CourseDto fromEntity(Course course) {
        List<String> features = course.getFeatures().stream()
                .map(CourseFeature::getFeature)
                .collect(Collectors.toList());
                
        List<String> marketplaces = course.getMarketplaces().stream()
                .map(CourseMarketplace::getMarketplace)
                .collect(Collectors.toList());
                
        return CourseDto.builder()
                .id(course.getId())
                .name(course.getName())
                .description(course.getDescription())
                .duration(course.getDuration())
                .fee(course.getFee())
                .originalPrice(course.getOriginalPrice())
                .level(course.getLevel())
                .features(features)
                .marketplaces(marketplaces)
                .build();
    }
}