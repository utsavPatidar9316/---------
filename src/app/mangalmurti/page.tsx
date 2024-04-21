"use client";
import React, { useState, useEffect } from "react";
import { mangalMurti } from "@/utils/data";
import { useDarkMode } from "@/context/Darkmode";
import Skeleton from "@mui/material/Skeleton";

const MangalMurtiDisplay = () => {
  const { darkMode } = useDarkMode();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mb-8 shadow-md rounded-md">
      <h2
        className={`mb-4 text-center rounded-lg my-2 p-4`}
        style={{ fontSize: "x-large", fontWeight: "bolder" }}
      >
        મંગલમૂર્તિ
      </h2>
      {loading ? (
        <div>
          <div>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
              <div className="mt-4" key={Math.random()}>
                <Skeleton variant="rounded" height={40} animation="wave" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-4 lg:gap-8">
          {mangalMurti.map((verse) => (
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
      )}
    </div>
  );
};

export default MangalMurtiDisplay;
