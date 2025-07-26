const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const performanceMetricsRoute = require("./routes/performanceMetrics.route");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Performance Metrics API routes
app.use("/api/performance-metrics", performanceMetricsRoute);

module.exports = app;
