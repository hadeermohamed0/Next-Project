import Task from "@/models/Taskmodel";
import { disconnect } from "mongoose";
import React from "react";
import * as z from "zod";
import { connectDB } from "@/DataBase/dbconnection";
import { revalidatePath } from "next/cache";
import { mongoose } from "mongoose";

import { creatTodo } from "@/server/action/toDoAction";
import ToDoForm from "@/components/ToDoForm";

///ايرور ف الاتصال ب الداتا بيز
// async function getToDo() {
//   await connectDB();
//   const tasks = await Task.find();
//   await disconnect();
//   return tasks;
// }
async function getToDo() {
  if (mongoose.connection.readyState !== 1) {
    await connectDB();
  }

  const tasks = await Task.find();
//   await disconnect();

  return tasks;
}

async function Todoo() {
  const tasks = await getToDo();

  return (
    <>
      <div className=" h-full w-screen ">
        <div className="w-full  max-w-md mx-auto m-20 p-6 bg-white shadow-2xl rounded-2xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {" "}
            ToDo App
          </h1>
          <ToDoForm />
          <div>
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-gray-100 p-4 rounded-lg shadow-md mt-4"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {task.taskname}
                </h2>
                <p className="text-gray-600">{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoo;
