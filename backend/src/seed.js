const mongoose = require("mongoose");
const UserStats = require("./models/userStats.model");
const AppPerformance = require("./models/AppPerformance");
const SystemHealth = require("./models/SystemHealth");
const ServerUsage = require("./models/ServerUsage");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;

const seedData = [
  {
    date: new Date(),
    newSignUps: 120,
    activeUsers: 1870,
    inactiveUsers: 560,
    newSignUpsChange: 15.03,
    activeUsersChange: 15.03,
    inactiveUsersChange: -0.03,
    newSignUpsHourlyData: [
      { hour: 0, count: 30 },
      { hour: 1, count: 38 },
      { hour: 2, count: 42 },
      { hour: 3, count: 40 },
      { hour: 4, count: 42 },
      { hour: 5, count: 45 },
      { hour: 6, count: 42 },
      { hour: 7, count: 41 },
      { hour: 8, count: 44 },
      { hour: 9, count: 48 },
      { hour: 10, count: 50 }
    ],
    activeUsersHourlyData: [
      { hour: 0, count: 30 },
      { hour: 1, count: 38 },
      { hour: 2, count: 42 },
      { hour: 3, count: 40 },
      { hour: 4, count: 42 },
      { hour: 5, count: 45 },
      { hour: 6, count: 42 },
      { hour: 7, count: 42 },
      { hour: 8, count: 44 },
      { hour: 9, count: 48 },
      { hour: 10, count: 50 }
    ],
    inactiveUsersHourlyData: [
      { hour: 0, count: 50 },
      { hour: 1, count: 55 },
      { hour: 2, count: 60 },
      { hour: 3, count: 55 },
      { hour: 4, count: 53 },
      { hour: 5, count: 55 },
      { hour: 6, count: 53 },
      { hour: 7, count: 51 },
      { hour: 8, count: 45 },
      { hour: 9, count: 40 },
      { hour: 10, count: 30 }
    ],
    peakActivity: { time: "20:00", users: 2500 },
    lowestActivity: { time: "04:00", users: 300 },
  },
];

const appPerformanceData = [
  {
    date: new Date(),
    averageResponseTime: 250,
    responseTimeChange: 15.03,
    errorRate: 0.7,
    errorRateChange: -0.03,
    uptime: 98.9,
    uptimeChange: -0.03,
    uptimePeriod: "past 30 days"
  }
];

const systemHealthData = [
  {
    date: new Date(),
    systemUsage: [
      { unit: 'Memory Usage', value: 35 },
      { unit: 'CPU Usage', value: 55 },
      { unit: 'Server', value: 10 }
    ],
    memoryUsage: [
      { unit: 'Main Server', value: 45 },
      { unit: 'Other Processes', value: 40 },
      { unit: 'Free Memory', value: 15 }
    ]
  }
];

const serverUsageData = [
  {
    date: new Date(),
    byCountry: [
      { country: 'US', usage: 85 },
      { country: 'Canada', usage: 72 },
      { country: 'Japan', usage: 95 },
      { country: 'India', usage: 88 },
      { country: 'Mexico', usage: 65 },
      { country: 'Australia', usage: 78 },
      { country: 'UK', usage: 68 },
      { country: 'France', usage: 58 },
      { country: 'Spain', usage: 75 },
      { country: 'Germany', usage: 70 },
      { country: 'Italy', usage: 62 },
      { country: 'South Korea', usage: 82 }
    ],
    byState: [
      { state: 'Alabama', stateCode: 'AL', usage: 45 },
      { state: 'Alaska', stateCode: 'AK', usage: 32 },
      { state: 'Arizona', stateCode: 'AZ', usage: 28 },
      { state: 'Arkansas', stateCode: 'AR', usage: 68 },
      { state: 'California', stateCode: 'CA', usage: 85 },
      { state: 'Colorado', stateCode: 'CO', usage: 78 },
      { state: 'Connecticut', stateCode: 'CT', usage: 55 },
      { state: 'Delaware', stateCode: 'DE', usage: 25 },
      { state: 'Florida', stateCode: 'FL', usage: 62 },
      { state: 'Georgia', stateCode: 'GA', usage: 88 },
      { state: 'Hawaii', stateCode: 'HI', usage: 38 },
      { state: 'Idaho', stateCode: 'ID', usage: 42 },
      { state: 'Illinois', stateCode: 'IL', usage: 35 },
      { state: 'Indiana', stateCode: 'IN', usage: 72 },
      { state: 'Iowa', stateCode: 'IA', usage: 82 },
      { state: 'Kansas', stateCode: 'KS', usage: 58 },
      { state: 'Kentucky', stateCode: 'KY', usage: 65 },
      { state: 'Louisiana', stateCode: 'LA', usage: 75 },
      { state: 'Maine', stateCode: 'ME', usage: 48 },
      { state: 'Maryland', stateCode: 'MD', usage: 52 },
      { state: 'Massachusetts', stateCode: 'MA', usage: 78 },
      { state: 'Michigan', stateCode: 'MI', usage: 68 },
      { state: 'Minnesota', stateCode: 'MN', usage: 72 },
      { state: 'Mississippi', stateCode: 'MS', usage: 38 },
      { state: 'Missouri', stateCode: 'MO', usage: 62 },
      { state: 'Montana', stateCode: 'MT', usage: 35 },
      { state: 'Nebraska', stateCode: 'NE', usage: 45 },
      { state: 'Nevada', stateCode: 'NV', usage: 58 },
      { state: 'New Hampshire', stateCode: 'NH', usage: 42 },
      { state: 'New Jersey', stateCode: 'NJ', usage: 75 },
      { state: 'New Mexico', stateCode: 'NM', usage: 48 },
      { state: 'New York', stateCode: 'NY', usage: 85 },
      { state: 'North Carolina', stateCode: 'NC', usage: 68 },
      { state: 'North Dakota', stateCode: 'ND', usage: 32 },
      { state: 'Ohio', stateCode: 'OH', usage: 72 },
      { state: 'Oklahoma', stateCode: 'OK', usage: 55 },
      { state: 'Oregon', stateCode: 'OR', usage: 65 },
      { state: 'Pennsylvania', stateCode: 'PA', usage: 78 },
      { state: 'Rhode Island', stateCode: 'RI', usage: 38 },
      { state: 'South Carolina', stateCode: 'SC', usage: 52 },
      { state: 'South Dakota', stateCode: 'SD', usage: 35 },
      { state: 'Tennessee', stateCode: 'TN', usage: 62 },
      { state: 'Texas', stateCode: 'TX', usage: 88 },
      { state: 'Utah', stateCode: 'UT', usage: 58 },
      { state: 'Vermont', stateCode: 'VT', usage: 32 },
      { state: 'Virginia', stateCode: 'VA', usage: 72 },
      { state: 'Washington', stateCode: 'WA', usage: 78 },
      { state: 'West Virginia', stateCode: 'WV', usage: 42 },
      { state: 'Wisconsin', stateCode: 'WI', usage: 65 },
      { state: 'Wyoming', stateCode: 'WY', usage: 28 }
    ]
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI, { dbName: "findme" });
    console.log("Connected to MongoDB");

    // Clear existing data
    await UserStats.deleteMany({});
    await AppPerformance.deleteMany({});
    await SystemHealth.deleteMany({});
    await ServerUsage.deleteMany({});

    // Insert new data
    await UserStats.insertMany(seedData);
    await AppPerformance.insertMany(appPerformanceData);
    await SystemHealth.insertMany(systemHealthData);
    await ServerUsage.insertMany(serverUsageData);

    console.log("UserStats, AppPerformance, SystemHealth, and ServerUsage data seeded!");
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed(); 