package com.example.springapp.service;

import com.example.springapp.model.Meal;
import com.example.springapp.repository.MealRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MealService {
    private final MealRepository mealRepository;

    public MealService(MealRepository mealRepository) {
        this.mealRepository = mealRepository;
    }

    public List<Meal> getAllMeals() {
        return mealRepository.findAll();
    }

    public Optional<Meal> getMealById(Long id) {
        return mealRepository.findById(id);
    }

    public Meal saveMeal(Meal meal) {
        return mealRepository.save(meal);
    }

    public void deleteMeal(Long id) {
        mealRepository.deleteById(id);
    }

    // JPQL: Find meals by diet plan
    public List<Meal> getMealsByDietPlan(Long dietPlanId) {
        return mealRepository.findByDietPlanId(dietPlanId);
    }

    // JPQL: Find meals by type
    public List<Meal> getMealsByType(String mealType) {
        return mealRepository.findByMealType(mealType);
    }

    // JPQL: Find meals by user
    public List<Meal> getMealsByUser(Long userId) {
        return mealRepository.findMealsByUserId(userId);
    }
}
