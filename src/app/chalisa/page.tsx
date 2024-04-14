"use client";
import React from "react";
import { hanumanChalisaGujarati } from "@/utils/data"; // Assuming your data is in a separate file
import { useDarkMode } from "@/context/Darkmode";

const HanumanChalisaDisplay = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className="container mx-auto px-4 py-8 mb-8 shadow-md rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-4 lg:gap-8">
        {hanumanChalisaGujarati.map((verse) => (
          <div
            key={verse.id}
            className={`p-4 mt-2 rounded-lg ${
              darkMode
                ? "bg-gray-600 hover:bg-blue-950"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            <p
              className="text-lg font-medium"
              style={{ textAlignLast: "center" }}
            >
              {verse.verse}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HanumanChalisaDisplay;
