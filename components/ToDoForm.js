"use client";
import React, { useActionState } from "react";

import { creatTodo } from "@/server/action/toDoAction";

const ToDoForm = () => {
  const [formstate, formAction] = useActionState(creatTodo);
  return (
    <div>
      <form action={formAction} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Task</label>
          <input
            required
            name="taskname"
            placeholder="Enter your task"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            required
            name="description"
            placeholder="Enter task description"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Submit
          </button>
        </div>
        {formstate?.message && (
          <p className={`${formstate.success ? "text-green-500" : "text-red-500"}`}>
            {formstate.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ToDoForm;
