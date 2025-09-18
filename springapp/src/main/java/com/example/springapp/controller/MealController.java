package com.example.springapp.controller;

import com.example.springapp.model.Meal;
import com.example.springapp.service.MealService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meals")
@CrossOrigin(origins = "*")
public class MealController {

    private final MealService mealService;

    public MealController(MealService mealService) {
        this.mealService = mealService;
    }

    // Get all meals
    @GetMapping
    public List<Meal> getAllMeals() {
        return mealService.getAllMeals();
    }

    // Get meal by ID
    @GetMapping("/{id}")
    public ResponseEntity<Meal> getMealById(@PathVariable Long id) {
        return mealService.getMealById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create new meal
    @PostMapping
    public Meal createMeal(@RequestBody Meal meal) {
        return mealService.saveMeal(meal);
    }

    // Update existing meal
    @PutMapping("/{id}")
    public ResponseEntity<Meal> updateMeal(@PathVariable Long id, @RequestBody Meal mealDetails) {
        return mealService.getMealById(id)
                .map(meal -> {
                    meal.setMealType(mealDetails.getMealType());
                    meal.setFoodItems(mealDetails.getFoodItems());
                    meal.setDietPlan(mealDetails.getDietPlan());
                    return ResponseEntity.ok(mealService.saveMeal(meal));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete meal
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMeal(@PathVariable Long id) {
        if (mealService.getMealById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        mealService.deleteMeal(id);
        return ResponseEntity.noContent().build();
    }

    // JPQL endpoint: Get meals by diet plan
    @GetMapping("/dietplan/{dietPlanId}")
    public List<Meal> getMealsByDietPlan(@PathVariable Long dietPlanId) {
        return mealService.getMealsByDietPlan(dietPlanId);
    }

    // JPQL endpoint: Get meals by meal type
    @GetMapping("/type/{mealType}")
    public List<Meal> getMealsByType(@PathVariable String mealType) {
        return mealService.getMealsByType(mealType);
    }

    // JPQL endpoint: Get meals by user
    @GetMapping("/user/{userId}")
    public List<Meal> getMealsByUser(@PathVariable Long userId) {
        return mealService.getMealsByUser(userId);
    }
}
