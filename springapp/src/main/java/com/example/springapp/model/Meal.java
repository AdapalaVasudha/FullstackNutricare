package com.example.springapp.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mealType; // e.g., Breakfast, Lunch, Dinner

    // Many Meals can have many FoodItems
    @ManyToMany
    @JoinTable(
        name = "meal_fooditem", // join table
        joinColumns = @JoinColumn(name = "meal_id"),
        inverseJoinColumns = @JoinColumn(name = "food_item_id")
    )
    private List<FoodItem> foodItems;

    // Many Meals belong to one DietPlan
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "diet_plan_id")
    private DietPlan dietPlan;
}
