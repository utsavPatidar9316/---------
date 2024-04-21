"use client";
import React, { useState, useEffect } from "react";
import { useDarkMode } from "@/context/Darkmode";
import Skeleton from "@mui/material/Skeleton";
import { aarti1, aarti2 } from "@/utils/data";

const Aarti = () => {
  const { darkMode } = useDarkMode();
  const [loading, setLoading] = useState(true);
  const [selectedAarti, setSelectedAarti] = useState("aarti1");

  const handleAartiSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAarti(event.target.value);
  };

  const aartiData: { [key: string]: { id: number; verse: string }[] } = {
    aarti1: aarti1,
    aarti2: aarti2,
  };

  const aartiTitles: { [key: string]: string } = {
    aarti1: "કૌશલ્યના કુંવર તમારી",
    aarti2: "આરતી કરૂ કૌશલ પુર રાજા",
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [selectedAarti]);
  return (
    <>
      <div className="flex justify-center text-center">
        <form className="max-w-sm mx-4 mt-8">
          <select
            value={selectedAarti}
            onChange={handleAartiSelect}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="aarti1">કૌશલ્યના કુંવર તમારી</option>
            <option value="aarti2">આરતી કરૂ કૌશલ પુર રાજા</option>
          </select>
        </form>
      </div>
      <div className="container mx-auto px-4 py-8 mb-8 shadow-md rounded-md">
        <h2
          className={`mb-4 text-center rounded-lg my-2 p-4`}
          style={{ fontSize: "x-large", fontWeight: "bolder" }}
        >
          {aartiTitles[selectedAarti]}
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
            {aartiData[selectedAarti].map((verse) => (
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
    </>
  );
};

export default Aarti;
