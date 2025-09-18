package com.example.springapp.repository;

import com.example.springapp.model.Meallog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface MeallogRepository extends JpaRepository<Meallog, Long> {

    // Find logs by User ID (JPQL)
    @Query("SELECT m FROM Meallog m WHERE m.user.id = :userId")
    List<Meallog> findByUserId(Long userId);

    // Find logs by Meal ID (JPQL)
    @Query("SELECT m FROM Meallog m WHERE m.meal.id = :mealId")
    List<Meallog> findByMealId(Long mealId);

    // Find logs between two dates (useful for reports)
    @Query("SELECT m FROM Meallog m WHERE m.consumedAt BETWEEN :start AND :end")
    List<Meallog> findLogsBetween(LocalDateTime start, LocalDateTime end);

    // Find logs by User & Meal
    @Query("SELECT m FROM Meallog m WHERE m.user.id = :userId AND m.meal.id = :mealId")
    List<Meallog> findByUserAndMeal(Long userId, Long mealId);
}
