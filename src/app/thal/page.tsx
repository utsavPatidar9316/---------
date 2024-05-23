"use client";
import React, { useState, useEffect } from "react";
import { useDarkMode } from "@/context/Darkmode";
import Skeleton from "@mui/material/Skeleton";
import {
  thal1,
  thal2,
  thal3,
  thal4,
  thal5,
  thal6,
  thal7,
  thal8,
  thal9,
  thal10,
} from "@/utils/data";

const Verse = () => {
  const { darkMode } = useDarkMode();
  const [loading, setLoading] = useState(true);
  const [selectedThal, setSelectedThal] = useState("thal1");

  const handleThalSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);
    setSelectedThal(event.target.value);
  };

  const thalData: { [key: string]: { id: number; verse: string }[] } = {
    thal1: thal1,
    thal2: thal2,
    thal3: thal3,
    thal4: thal4,
    thal5: thal5,
    thal6: thal6,
    thal7: thal7,
    thal8: thal8,
    thal9: thal9,
    thal10: thal10,
  };

  const thalTitles: { [key: string]: string } = {
    thal1: "મારા હરિ મંદિર માં",
    thal2: "મારા રસભીના હનુમાન",
    thal3: "કાન ચઢયા કદબની ઝાડ",
    thal4: "જમવા આવો જશૌદાના જાયા",
    thal5: "દૂધમાં સાકર, દૂધમાં ઘી",
    thal6: "વહેલા વહેલા આવો મારા વાલમાં",
    thal7: "ઓ મારા વ્હાલા",
    thal8: "હે મે તો કિઘી છે ઠાકરથાળી પધારો",
    thal9: "મારે આંગણિયે આવજો, અયોધ્યાના રામ",
    thal10: "ઝટપટ જમવા પધારો હનુમાનજી",
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [selectedThal]);
  return (
    <>
      <div className="flex justify-center text-center">
        <form className="max-w-sm mx-4 mt-8">
          <select
            value={selectedThal}
            onChange={handleThalSelect}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="thal1">મારા હરિ મંદિર માં</option>
            <option value="thal2">મારા રસભીના હનુમાન</option>
            <option value="thal3">કાન ચઢયા કદબની ઝાડ</option>
            <option value="thal4">જમવા આવો જશૌદાના જાયા</option>
            <option value="thal5">દૂધમાં સાકર, દૂધમાં ઘી</option>
            <option value="thal6">વહેલા વહેલા આવો મારા વાલમાં</option>
            <option value="thal7">ઓ મારા વ્હાલા</option>
            <option value="thal8">હે મે તો કિઘી છે ઠાકરથાળી પધારો</option>
            <option value="thal9">મારે આંગણિયે આવજો, અયોધ્યાના રામ</option>
            <option value="thal10">ઝટપટ જમવા પધારો હનુમાનજી</option>
          </select>
        </form>
      </div>
      <div className="container mx-auto px-4 py-8 mb-8 shadow-md rounded-md">
        <h2
          className={`mb-4 text-center rounded-lg my-2 p-4`}
          style={{ fontSize: "x-large", fontWeight: "bolder" }}
        >
          {thalTitles[selectedThal]}
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
            {thalData[selectedThal].map((verse) => (
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

export default Verse;
