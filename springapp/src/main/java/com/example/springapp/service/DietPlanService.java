package com.example.springapp.service;

import com.example.springapp.model.DietPlan;
import com.example.springapp.model.User;
import com.example.springapp.repository.DietPlanRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DietPlanService {

    private final DietPlanRepository dietPlanRepository;

    public DietPlanService(DietPlanRepository dietPlanRepository) {
        this.dietPlanRepository = dietPlanRepository;
    }

    public DietPlan saveDietPlan(DietPlan dietPlan) {
        return dietPlanRepository.save(dietPlan);
    }

    public List<DietPlan> getAllDietPlans() {
        return dietPlanRepository.findAll();
    }

    public Optional<DietPlan> getDietPlanById(Long id) {
        return dietPlanRepository.findById(id);
    }

    public void deleteDietPlan(Long id) {
        dietPlanRepository.deleteById(id);
    }

    // JPQL: Find diet plans by userId
    public List<DietPlan> getDietPlansByUserId(Long userId) {
        return dietPlanRepository.findByUserId(userId);
    }

    // JPQL: Search plans by keyword in planName
    public List<DietPlan> searchPlansByName(String keyword) {
        return dietPlanRepository.searchByPlanName(keyword);
    }

    // JPQL: Find diet plans created by users with specific role
    public List<DietPlan> getPlansByUserRole(User.Role role) {
        return dietPlanRepository.findPlansByUserRole(role);
    }
}
