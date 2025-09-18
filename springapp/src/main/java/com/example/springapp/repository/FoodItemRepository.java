package com.example.springapp.repository;

import com.example.springapp.model.FoodItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodItemRepository extends JpaRepository<FoodItem, Long> {

    // Find by name (derived query)
    FoodItem findByName(String name);

    // JPQL: Find items with calories less than given value
    @Query("SELECT f FROM FoodItem f WHERE f.calories < :calories")
    List<FoodItem> findLowCalorieItems(int calories);

    // JPQL: Find high protein items
    @Query("SELECT f FROM FoodItem f WHERE f.protein >= :minProtein")
    List<FoodItem> findHighProteinItems(double minProtein);

    // JPQL: Find items by meal ID
    @Query("SELECT f FROM FoodItem f JOIN f.meals m WHERE m.id = :mealId")
    List<FoodItem> findByMealId(Long mealId);

    // JPQL: Find items containing carbs within a range
    @Query("SELECT f FROM FoodItem f WHERE f.carbs BETWEEN :minCarbs AND :maxCarbs")
    List<FoodItem> findByCarbsRange(double minCarbs, double maxCarbs);
}
