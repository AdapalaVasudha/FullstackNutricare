package com.example.springapp.controller;

import com.example.springapp.model.User;
import com.example.springapp.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Create user
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    // Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // Get user by ID
    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    // Update user
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        return userService.getUserById(id)
                .map(user -> {
                    user.setName(userDetails.getName());
                    user.setAge(userDetails.getAge());
                    user.setGender(userDetails.getGender());
                    user.setEmail(userDetails.getEmail());
                    user.setPassword(userDetails.getPassword());
                    user.setHeight(userDetails.getHeight());
                    user.setWeight(userDetails.getWeight());
                    user.setDiabetesType(userDetails.getDiabetesType());
                    user.setActivityLevel(userDetails.getActivityLevel());
                    user.setRole(userDetails.getRole());
                    return userService.saveUser(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }

    // Delete user
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "User deleted successfully with id " + id;
    }

    // Extra endpoints for JPQL queries
    @GetMapping("/role/{role}")
    public List<User> getUsersByRole(@PathVariable User.Role role) {
        return userService.getUsersByRole(role);
    }

    @GetMapping("/weight/above/{weight}")
    public List<User> getUsersWithWeightGreaterThan(@PathVariable Double weight) {
        return userService.getUsersWithWeightGreaterThan(weight);
    }
}
