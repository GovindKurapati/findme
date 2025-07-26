const mongoose = require("mongoose");
const UserStats = require("../models/userStats.model");
const AppPerformance = require("../models/AppPerformance");
const SystemHealth = require("../models/SystemHealth");
const ServerUsage = require("../models/ServerUsage");

class PerformanceMetricsService {

    getUserStats = async (filter = {}) => {
      try {
        return await UserStats.findOne(filter).sort({ date: -1 });
      } catch (error) {
        throw new Error(error);
      }
    };
  
    getUserStatsByDate = async (date) => {
      try {
        return await UserStats.findOne({ date });
      } catch (error) {
        throw new Error(error);
      }
    };
  
    createUserStats = async (data) => {
      try {
        return await UserStats.create(data);
      } catch (error) {
        throw new Error(error);
      }
    };

    getAppPerformance = async (filter = {}) => {
      try {
        return await AppPerformance.findOne(filter).sort({ date: -1 });
      } catch (error) {
        throw new Error(error);
      }
    };

    createAppPerformance = async (data) => {
      try {
        return await AppPerformance.create(data);
      } catch (error) {
        throw new Error(error);
      }
    };

    getSystemHealth = async (filter = {}) => {
      try {
        return await SystemHealth.findOne(filter).sort({ date: -1 });
      } catch (error) {
        throw new Error(error);
      }
    };

    createSystemHealth = async (data) => {
      try {
        return await SystemHealth.create(data);
      } catch (error) {
        throw new Error(error);
      }
    };

    getServerUsage = async (filter = {}) => {
      try {
        return await ServerUsage.findOne(filter).sort({ date: -1 });
      } catch (error) {
        throw new Error(error);
      }
    };

    createServerUsage = async (data) => {
      try {
        return await ServerUsage.create(data);
      } catch (error) {
        throw new Error(error);
      }
    };
  }
  
  module.exports = new PerformanceMetricsService(); 