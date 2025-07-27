const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_URI, { dbName: "findme" });
    console.log("MongoDB connected successfully");

    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected");
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
