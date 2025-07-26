const mongoose = require("mongoose");
const AppPerformanceSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    averageResponseTime: Number,
    responseTimeChange: Number,
    errorRate: Number,
    errorRateChange: Number,
    uptime: Number,
    uptimeChange: Number,
    uptimePeriod: String
});

module.exports = mongoose.model("AppPerformance", AppPerformanceSchema);