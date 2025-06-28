"use client";
import React, { useEffect } from "react";

const Dashboard = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <main className="p-8">
        <h2 className="text-3xl font-semibold mb-6 text-amber-400">
          Welcome back! this is your dashboard of hadeer Task
        </h2>

        <div className="flex justify-between">
          <div className="bg-white w-64  p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl  font-bold text-gray-800 mb-2">To Do</h3>
            <p className="text-gray-600">You have 5 new notifications.</p>
          </div>

          <div className="bg-white w-64 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Shopping</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
