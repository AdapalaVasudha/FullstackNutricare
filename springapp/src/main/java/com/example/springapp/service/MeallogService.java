package com.example.springapp.service;

import com.example.springapp.model.Meallog;
import com.example.springapp.repository.MeallogRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MeallogService {
    private final MeallogRepository meallogRepository;

    public MeallogService(MeallogRepository meallogRepository) {
        this.meallogRepository = meallogRepository;
    }

    public List<Meallog> getAllMeallogs() {
        return meallogRepository.findAll();
    }

    public Optional<Meallog> getMeallogById(Long id) {
        return meallogRepository.findById(id);
    }

    public Meallog saveMealLog(Meallog mealLog) {
        return meallogRepository.save(mealLog);
    }

    public void deleteMeallog(Long id) {
        meallogRepository.deleteById(id);
    }

    // JPQL-based methods
    public List<Meallog> getLogsByUser(Long userId) {
        return meallogRepository.findByUserId(userId);
    }

    public List<Meallog> getLogsByMeal(Long mealId) {
        return meallogRepository.findByMealId(mealId);
    }

    public List<Meallog> getLogsBetween(LocalDateTime start, LocalDateTime end) {
        return meallogRepository.findLogsBetween(start, end);
    }

    public List<Meallog> getLogsByUserAndMeal(Long userId, Long mealId) {
        return meallogRepository.findByUserAndMeal(userId, mealId);
    }
}
