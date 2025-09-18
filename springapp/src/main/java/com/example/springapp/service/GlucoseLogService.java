package com.example.springapp.service;

import com.example.springapp.model.GlucoseLog;
import com.example.springapp.repository.GlucoseLogRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class GlucoseLogService {

    private final GlucoseLogRepository glucoseLogRepository;

    public GlucoseLogService(GlucoseLogRepository glucoseLogRepository) {
        this.glucoseLogRepository = glucoseLogRepository;
    }

    public List<GlucoseLog> getAllGlucoseLogs() {
        return glucoseLogRepository.findAll();
    }

    public Optional<GlucoseLog> getGlucoseLogById(Long id) {
        return glucoseLogRepository.findById(id);
    }

    public GlucoseLog saveGlucoseLog(GlucoseLog glucoseLog) {
        return glucoseLogRepository.save(glucoseLog);
    }

    public void deleteGlucoseLog(Long id) {
        glucoseLogRepository.deleteById(id);
    }

    // ========== JPQL-based methods ==========
    public List<GlucoseLog> getLogsByUserAndDateRange(Long userId, LocalDateTime start, LocalDateTime end) {
        return glucoseLogRepository.findLogsByUserAndDateRange(userId, start, end);
    }

    public List<GlucoseLog> getHighGlucoseLogs(Long userId, double threshold) {
        return glucoseLogRepository.findHighGlucoseLogs(userId, threshold);
    }

    public List<GlucoseLog> getLowGlucoseLogs(Long userId, double threshold) {
        return glucoseLogRepository.findLowGlucoseLogs(userId, threshold);
    }

    public List<GlucoseLog> getLatestLogs(Long userId, int limit) {
        List<GlucoseLog> logs = glucoseLogRepository.findLatestLogs(userId);
        return logs.size() > limit ? logs.subList(0, limit) : logs;
    }
}
