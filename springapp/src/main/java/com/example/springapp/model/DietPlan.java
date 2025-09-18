package com.example.springapp.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class DietPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String planName;
    private String description;

    // Many DietPlans belong to One User
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)  
    private User user;  // Correct mapping instead of Long userId
}
