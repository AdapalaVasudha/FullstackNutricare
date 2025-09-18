package com.example.springapp.service;

import com.example.springapp.model.FoodItem;
import com.example.springapp.repository.FoodItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodItemService {

    private final FoodItemRepository foodItemRepository;

    public FoodItemService(FoodItemRepository foodItemRepository) {
        this.foodItemRepository = foodItemRepository;
    }

    public FoodItem saveFoodItem(FoodItem foodItem) {
        return foodItemRepository.save(foodItem);
    }

    public List<FoodItem> getAllFoodItems() {
        return foodItemRepository.findAll();
    }

    public Optional<FoodItem> getFoodItemById(Long id) {
        return foodItemRepository.findById(id);
    }

    public void deleteFoodItem(Long id) {
        foodItemRepository.deleteById(id);
    }

    // JPQL-based methods
    public List<FoodItem> getLowCalorieItems(int calories) {
        return foodItemRepository.findLowCalorieItems(calories);
    }

    public List<FoodItem> getHighProteinItems(double minProtein) {
        return foodItemRepository.findHighProteinItems(minProtein);
    }

    public List<FoodItem> getFoodItemsByMeal(Long mealId) {
        return foodItemRepository.findByMealId(mealId);
    }

    public List<FoodItem> getFoodItemsByCarbsRange(double minCarbs, double maxCarbs) {
        return foodItemRepository.findByCarbsRange(minCarbs, maxCarbs);
    }
}
