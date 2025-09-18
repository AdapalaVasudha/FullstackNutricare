package com.example.springapp.controller;

import com.example.springapp.model.GlucoseLog;
import com.example.springapp.service.GlucoseLogService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/glucoselogs")
public class GlucoseLogController {

    private final GlucoseLogService glucoseLogService;

    public GlucoseLogController(GlucoseLogService glucoseLogService) {
        this.glucoseLogService = glucoseLogService;
    }

    // Get all glucose logs
    @GetMapping
    public List<GlucoseLog> getAllGlucoseLogs() {
        return glucoseLogService.getAllGlucoseLogs();
    }

    // Get glucose log by ID
    @GetMapping("/{id}")
    public ResponseEntity<GlucoseLog> getGlucoseLogById(@PathVariable Long id) {
        return glucoseLogService.getGlucoseLogById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create new glucose log
    @PostMapping
    public GlucoseLog createGlucoseLog(@RequestBody GlucoseLog glucoseLog) {
        return glucoseLogService.saveGlucoseLog(glucoseLog);
    }

    // Update glucose log
    @PutMapping("/{id}")
    public ResponseEntity<GlucoseLog> updateGlucoseLog(@PathVariable Long id, @RequestBody GlucoseLog logDetails) {
        return glucoseLogService.getGlucoseLogById(id)
                .map(log -> {
                    log.setUser(logDetails.getUser());
                    log.setGlucoseLevel(logDetails.getGlucoseLevel());
                    log.setMeasuredAt(logDetails.getMeasuredAt());
                    return ResponseEntity.ok(glucoseLogService.saveGlucoseLog(log));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete glucose log
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGlucoseLog(@PathVariable Long id) {
        if (glucoseLogService.getGlucoseLogById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        glucoseLogService.deleteGlucoseLog(id);
        return ResponseEntity.noContent().build();
    }

    // ============== CUSTOM JPQL ENDPOINTS ==============

    // Get logs by user & date range
    @GetMapping("/user/{userId}/range")
    public List<GlucoseLog> getLogsByUserAndDateRange(
            @PathVariable Long userId,
            @RequestParam LocalDateTime start,
            @RequestParam LocalDateTime end) {
        return glucoseLogService.getLogsByUserAndDateRange(userId, start, end);
    }

    // Get high glucose logs
    @GetMapping("/user/{userId}/high")
    public List<GlucoseLog> getHighGlucoseLogs(
            @PathVariable Long userId,
            @RequestParam double threshold) {
        return glucoseLogService.getHighGlucoseLogs(userId, threshold);
    }

    // Get low glucose logs
    @GetMapping("/user/{userId}/low")
    public List<GlucoseLog> getLowGlucoseLogs(
            @PathVariable Long userId,
            @RequestParam double threshold) {
        return glucoseLogService.getLowGlucoseLogs(userId, threshold);
    }

    // Get latest logs (limit)
    @GetMapping("/user/{userId}/latest")
    public List<GlucoseLog> getLatestLogs(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "5") int limit) {
        return glucoseLogService.getLatestLogs(userId, limit);
    }
}
