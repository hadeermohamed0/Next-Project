const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now, // بيطلع ايرور لو عملتها String
  },
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
module.exports = Task;
