const mongoose = require("mongoose");
const SystemHealthSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    systemUsage: [{
        unit: String,
        value: Number
    }],
    memoryUsage: [{
        unit: String,
        value: Number
    }]
});

module.exports = mongoose.model("SystemHealth", SystemHealthSchema);