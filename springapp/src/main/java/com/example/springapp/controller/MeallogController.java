package com.example.springapp.controller;

import com.example.springapp.model.Meallog;
import com.example.springapp.service.MeallogService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/meallogs")
public class MeallogController {

    private final MeallogService meallogService;

    public MeallogController(MeallogService meallogService) {
        this.meallogService = meallogService;
    }

    // Get all meal logs
    @GetMapping
    public List<Meallog> getAllMeallogs() {
        return meallogService.getAllMeallogs();
    }

    // Get meal log by ID
    @GetMapping("/{id}")
    public ResponseEntity<Meallog> getMeallogById(@PathVariable Long id) {
        return meallogService.getMeallogById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create new meal log
    @PostMapping
    public Meallog createMeallog(@RequestBody Meallog meallog) {
        return meallogService.saveMealLog(meallog);
    }

    // Update existing meal log
    @PutMapping("/{id}")
    public ResponseEntity<Meallog> updateMeallog(
            @PathVariable Long id,
            @RequestBody Meallog logDetails) {
        return meallogService.getMeallogById(id)
                .map(log -> {
                    log.setMeal(logDetails.getMeal());
                    log.setUser(logDetails.getUser());
                    log.setConsumedAt(logDetails.getConsumedAt());
                    return ResponseEntity.ok(meallogService.saveMealLog(log));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete meal log
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMeallog(@PathVariable Long id) {
        if (meallogService.getMeallogById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        meallogService.deleteMeallog(id);
        return ResponseEntity.noContent().build();
    }

    // ================= CUSTOM JPQL ENDPOINTS =================

    // Get logs by user
    @GetMapping("/user/{userId}")
    public List<Meallog> getLogsByUser(@PathVariable Long userId) {
        return meallogService.getLogsByUser(userId);
    }

    // Get logs by meal
    @GetMapping("/meal/{mealId}")
    public List<Meallog> getLogsByMeal(@PathVariable Long mealId) {
        return meallogService.getLogsByMeal(mealId);
    }

    // Get logs between two timestamps
    @GetMapping("/between")
    public List<Meallog> getLogsBetween(@RequestParam LocalDateTime start,
                                        @RequestParam LocalDateTime end) {
        return meallogService.getLogsBetween(start, end);
    }

    // Get logs by user & meal
    @GetMapping("/user/{userId}/meal/{mealId}")
    public List<Meallog> getLogsByUserAndMeal(@PathVariable Long userId,
                                              @PathVariable Long mealId) {
        return meallogService.getLogsByUserAndMeal(userId, mealId);
    }
}
