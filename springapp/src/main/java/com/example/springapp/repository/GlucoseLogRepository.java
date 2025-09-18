package com.example.springapp.repository;

import com.example.springapp.model.GlucoseLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface GlucoseLogRepository extends JpaRepository<GlucoseLog, Long> {

    // Derived query - all logs for a user
    List<GlucoseLog> findByUserId(Long userId);

    // JPQL: Get logs within a date range for a user
    @Query("SELECT g FROM GlucoseLog g WHERE g.user.id = :userId AND g.measuredAt BETWEEN :start AND :end ORDER BY g.measuredAt ASC")
    List<GlucoseLog> findLogsByUserAndDateRange(Long userId, LocalDateTime start, LocalDateTime end);

    // JPQL: Get logs above a threshold
    @Query("SELECT g FROM GlucoseLog g WHERE g.user.id = :userId AND g.glucoseLevel > :threshold ORDER BY g.measuredAt DESC")
    List<GlucoseLog> findHighGlucoseLogs(Long userId, double threshold);

    // JPQL: Get logs below a threshold
    @Query("SELECT g FROM GlucoseLog g WHERE g.user.id = :userId AND g.glucoseLevel < :threshold ORDER BY g.measuredAt DESC")
    List<GlucoseLog> findLowGlucoseLogs(Long userId, double threshold);

    // JPQL: Get latest logs (limit handled in service)
    @Query("SELECT g FROM GlucoseLog g WHERE g.user.id = :userId ORDER BY g.measuredAt DESC")
    List<GlucoseLog> findLatestLogs(Long userId);
}
