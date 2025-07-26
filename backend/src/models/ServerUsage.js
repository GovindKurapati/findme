const mongoose = require("mongoose");
const ServerUsageSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    byCountry: [{
        country: String,
        usage: Number
    }],
    byState: [{
        state: String,
        stateCode: String,
        usage: Number
    }]
});

module.exports = mongoose.model("ServerUsage", ServerUsageSchema);