const mongoose = require("mongoose");
const UserStatsSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now, index: true },
    newSignUps: Number,
    activeUsers: Number,
    inactiveUsers: Number,
    newSignUpsChange: Number,
    activeUsersChange: Number,
    inactiveUsersChange: Number,
    newSignUpsHourlyData: [{
        hour: Number,
        count: Number
    }],
    activeUsersHourlyData: [{
        hour: Number,
        count: Number
    }],
    inactiveUsersHourlyData: [{
        hour: Number,
        count: Number
    }],
    peakActivity: {
        time: String,
        users: Number
    },
    lowestActivity: {
        time: String,
        users: Number
    }
});

module.exports = mongoose.model("UserStats", UserStatsSchema);