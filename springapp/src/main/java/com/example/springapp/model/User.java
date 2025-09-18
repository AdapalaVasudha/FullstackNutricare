package com.example.springapp.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int age;
    private String gender;
    private String email;
    private String password;
    private Double height;
    private Double weight;
    private String diabetesType;
    private String activityLevel;

    @Enumerated(EnumType.STRING)
    private Role role;
   
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DietPlan> dietPlans;

    // One user can have many Meallogs (daily meal logs)
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Meallog> mealLogs;


    public enum Role {
        USER, ADMIN
    }
}
