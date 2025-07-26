const express = require("express");
const performanceMetricsController = require("../controllers/performanceMetrics.controller");

const router = express.Router();

// Get user stats
router.get("/user-stats", performanceMetricsController.getUserStats);

// Get app performance
router.get("/app-performance", performanceMetricsController.getAppPerformance);

// Get system health
router.get("/system-health", performanceMetricsController.getSystemHealth);

// Get server usage
router.get("/server-usage", performanceMetricsController.getServerUsage);

module.exports = router; 