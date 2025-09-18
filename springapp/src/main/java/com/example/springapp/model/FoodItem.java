package com.example.springapp.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
public class FoodItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;      // e.g., Oats, Brown Rice
    private int calories;     // in kcal
    private double carbs;     // in grams
    private double protein;   // in grams
    private double fats;      // in grams

    @ManyToMany(mappedBy = "foodItems")
    private List<Meal> meals;
}
