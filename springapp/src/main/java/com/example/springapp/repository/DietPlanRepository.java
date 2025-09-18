package com.example.springapp.repository;

import com.example.springapp.model.DietPlan;
import com.example.springapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DietPlanRepository extends JpaRepository<DietPlan, Long> {

    // Get diet plans for a specific user
    @Query("SELECT d FROM DietPlan d WHERE d.user.id = :userId")
    List<DietPlan> findByUserId(@Param("userId") Long userId);

    // Search diet plans by name
    @Query("SELECT d FROM DietPlan d WHERE LOWER(d.planName) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<DietPlan> searchByPlanName(@Param("keyword") String keyword);

    // Get diet plans created by users with a specific role
    @Query("SELECT d FROM DietPlan d WHERE d.user.role = :role")
    List<DietPlan> findPlansByUserRole(@Param("role") User.Role role);
}
