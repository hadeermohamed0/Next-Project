const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState === 1) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    await mongoose.connect("mongodb://localhost:27017/TodoTask", {
      dbName: "ToDoTask",
    });
    isConnected = true;
    console.log("Database connected successfully");
  } catch (error) {
    console.error(" Database connection failed:", error.message);
    throw error;
  }
};

const disconnect = async () => {
  if (mongoose.connection.readyState !== 0) {
    try {
      await mongoose.disconnect();
      isConnected = false;
      console.log("🔌 Database disconnected successfully");
    } catch (error) {
      throw new Error("Database disconnection failed: " + error.message);
    }
  }
};

module.exports = {
  connectDB,
  disconnect,
};
