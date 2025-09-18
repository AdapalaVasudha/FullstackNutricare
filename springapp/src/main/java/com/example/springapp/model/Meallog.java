package com.example.springapp.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
public class Meallog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Many Meallogs belong to One User
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")  // FK column in meallog table
    private User user;

    // Many Meallogs belong to One Meal
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "meal_id")  // FK column in meallog table
    private Meal meal;

    // It's better to store timestamp as LocalDateTime
    private LocalDateTime consumedAt;
}
