package com.example.springapp.controller;

import com.example.springapp.model.FoodItem;
import com.example.springapp.service.FoodItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fooditems")
public class FoodItemController {

    private final FoodItemService foodItemService;

    public FoodItemController(FoodItemService foodItemService) {
        this.foodItemService = foodItemService;
    }

    // Get all food items
    @GetMapping
    public List<FoodItem> getAllFoodItems() {
        return foodItemService.getAllFoodItems();
    }

    // Get food item by ID
    @GetMapping("/{id}")
    public ResponseEntity<FoodItem> getFoodItemById(@PathVariable Long id) {
        return foodItemService.getFoodItemById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create new food item
    @PostMapping
    public FoodItem createFoodItem(@RequestBody FoodItem foodItem) {
        return foodItemService.saveFoodItem(foodItem);
    }

    // Update existing food item
    @PutMapping("/{id}")
    public ResponseEntity<FoodItem> updateFoodItem(@PathVariable Long id, @RequestBody FoodItem details) {
        return foodItemService.getFoodItemById(id)
                .map(item -> {
                    item.setName(details.getName());
                    item.setCalories(details.getCalories());
                    item.setProtein(details.getProtein());
                    item.setCarbs(details.getCarbs());
                    item.setFats(details.getFats());
                    return ResponseEntity.ok(foodItemService.saveFoodItem(item));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete food item
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFoodItem(@PathVariable Long id) {
        if (foodItemService.getFoodItemById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        foodItemService.deleteFoodItem(id);
        return ResponseEntity.noContent().build();
    }

    // ============== CUSTOM JPQL ENDPOINTS ==============

    // Get low-calorie food items
    @GetMapping("/lowcalorie/{calories}")
    public List<FoodItem> getLowCalorieItems(@PathVariable int calories) {
        return foodItemService.getLowCalorieItems(calories);
    }

    // Get high-protein food items
    @GetMapping("/highprotein/{minProtein}")
    public List<FoodItem> getHighProteinItems(@PathVariable double minProtein) {
        return foodItemService.getHighProteinItems(minProtein);
    }

    // Get food items by meal
    @GetMapping("/meal/{mealId}")
    public List<FoodItem> getFoodItemsByMeal(@PathVariable Long mealId) {
        return foodItemService.getFoodItemsByMeal(mealId);
    }

    // Get food items within carbs range
    @GetMapping("/carbs")
    public List<FoodItem> getFoodItemsByCarbsRange(@RequestParam double min, @RequestParam double max) {
        return foodItemService.getFoodItemsByCarbsRange(min, max);
    }
}
