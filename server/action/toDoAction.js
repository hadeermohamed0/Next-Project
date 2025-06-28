"use server";

const { revalidatePath } = require("next/cache");
const Task = require("../../models/Taskmodel");
const z = require("zod");
const { todoSchema } = require("../../Utils/schema/todoschema");
import { connectDB, disconnect } from "@/DataBase/dbconnection";

async function creatTodo(currentState, formData) {
  const taskname = formData.get("taskname")?.toString();
  const description = formData.get("description")?.toString();

  // console.log(taskname, description);
  const newtask = { taskname, description };
  try {
    const taskvalue = await todoSchema.parseAsync(newtask);

    await connectDB();
    const task = new Task(taskvalue);
    await task.save();
    console.log("Task created successfully", task);
    await disconnect();
    revalidatePath("/ToDo");
    return {
      success: true,
      message: "Task created successfully",
    };
  } catch (error) {
    //عشان اعرف  اى الايرور بالظبط
    if (error instanceof z.ZodError) {
      console.log("Validation failed:", error.issues);
      return {
        success: false,
        message: "Validation failed",
        issues: error.issues,
      };
    } else {
      console.log(" Unexpected error:", error);
      return {
        success: false,
        message: "Task Name is required and must be between 3 and 10 characters",
        error: error.message,
      };
    }
  }
}
export { creatTodo };
