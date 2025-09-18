package com.example.springapp.controller;

import com.example.springapp.model.DietPlan;
import com.example.springapp.model.User;
import com.example.springapp.service.DietPlanService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dietplans")
@CrossOrigin(origins = "*")
public class DietPlanController {

    private final DietPlanService dietPlanService;

    public DietPlanController(DietPlanService dietPlanService) {
        this.dietPlanService = dietPlanService;
    }

    // Get all diet plans
    @GetMapping
    public List<DietPlan> getAllDietPlans() {
        return dietPlanService.getAllDietPlans();
    }

    // Get diet plan by ID
    @GetMapping("/{id}")
    public ResponseEntity<DietPlan> getDietPlanById(@PathVariable Long id) {
        return dietPlanService.getDietPlanById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create new diet plan
    @PostMapping
    public DietPlan createDietPlan(@RequestBody DietPlan dietPlan) {
        return dietPlanService.saveDietPlan(dietPlan);
    }

    // Update existing diet plan
    @PutMapping("/{id}")
    public ResponseEntity<DietPlan> updateDietPlan(@PathVariable Long id, @RequestBody DietPlan details) {
        return dietPlanService.getDietPlanById(id)
                .map(plan -> {
                    plan.setPlanName(details.getPlanName());
                    plan.setDescription(details.getDescription());
                    plan.setUser(details.getUser());  // fixed
                    return ResponseEntity.ok(dietPlanService.saveDietPlan(plan));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete diet plan
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDietPlan(@PathVariable Long id) {
        if (dietPlanService.getDietPlanById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        dietPlanService.deleteDietPlan(id);
        return ResponseEntity.noContent().build();
    }

    // JPQL endpoint: Get diet plans by userId
    @GetMapping("/user/{userId}")
    public List<DietPlan> getDietPlansByUserId(@PathVariable Long userId) {
        return dietPlanService.getDietPlansByUserId(userId);
    }

    // JPQL endpoint: Search diet plans by name
    @GetMapping("/search/{keyword}")
    public List<DietPlan> searchDietPlans(@PathVariable String keyword) {
        return dietPlanService.searchPlansByName(keyword);
    }

    // JPQL endpoint: Get diet plans by user role
    @GetMapping("/role/{role}")
    public List<DietPlan> getDietPlansByUserRole(@PathVariable User.Role role) {
        return dietPlanService.getPlansByUserRole(role);
    }
}
