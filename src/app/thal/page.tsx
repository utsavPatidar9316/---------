"use client";
import React, { useState } from "react";
import Verse from "@/component/Verse";
import {
  thal1,
  thal2,
  thal3,
  thal4,
  thal5,
  thal6,
  thal7,
  thal8,
} from "@/utils/data";

const ThalDisplay = () => {
  const [selectedThal, setSelectedThal] = useState("thal1");

  const handleThalSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedThal(event.target.value);
  };

  // Object containing all thal data
  const thalData: { [key: string]: { id: number; verse: string }[] } = {
    thal1: thal1,
    thal2: thal2,
    thal3: thal3,
    thal4: thal4,
    thal5: thal5,
    thal6: thal6,
    thal7: thal7,
    thal8: thal8,
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
  };

  return (
    <>
      <form className="max-w-sm mx-auto mt-8">
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
        </select>
      </form>
      {/* Pass selected thal data to the Verse component */}
      <Verse verses={thalData[selectedThal]} title={thalTitles[selectedThal]} />
    </>
  );
};

export default ThalDisplay;
