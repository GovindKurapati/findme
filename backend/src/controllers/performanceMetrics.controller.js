const performanceMetricsService = require("../services/performanceMetrics.service");

class PerformanceMetricsController {

    getUserStats = async (req, res) => {
      try {
        const stats = await performanceMetricsService.getUserStats();
        res.json(stats);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };

    getAppPerformance = async (req, res) => {
      try {
        const performance = await performanceMetricsService.getAppPerformance();
        res.json(performance);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };

    getSystemHealth = async (req, res) => {
      try {
        const systemHealth = await performanceMetricsService.getSystemHealth();
        res.json(systemHealth);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };

    getServerUsage = async (req, res) => {
      try {
        const serverUsage = await performanceMetricsService.getServerUsage();
        res.json(serverUsage);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  };
    
  module.exports = new PerformanceMetricsController();