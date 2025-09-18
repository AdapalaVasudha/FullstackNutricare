package com.example.springapp.repository;

import com.example.springapp.model.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal, Long> {

    // JPQL: Get meals for a specific diet plan
    @Query("SELECT m FROM Meal m WHERE m.dietPlan.id = :dietPlanId")
    List<Meal> findByDietPlanId(@Param("dietPlanId") Long dietPlanId);

    // JPQL: Get meals by meal type (Breakfast, Lunch, Dinner)
    @Query("SELECT m FROM Meal m WHERE LOWER(m.mealType) = LOWER(:mealType)")
    List<Meal> findByMealType(@Param("mealType") String mealType);

    // JPQL: Get meals for a specific user (through diet plan -> user)
    @Query("SELECT m FROM Meal m WHERE m.dietPlan.user.id = :userId")
    List<Meal> findMealsByUserId(@Param("userId") Long userId);
}
