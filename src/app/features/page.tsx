"use client";
import React from "react";
import { useDarkMode as darkmodeContext } from "@/context/Darkmode";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  const { darkMode } = darkmodeContext();
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-4 pb-14">
      <div className="grid grid-cols-2 gap-8 max-w-3xl text-center">
        {/* Card 1 */}
        <div
          className={`shadow-xl p-6 mt-2 rounded-lg ${
            darkMode
              ? "bg-gray-600 hover:bg-blue-950"
              : "bg-white hover:bg-gray-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">ચાલીસા</h2>
          <Image
            src="/images/hanuman.png"
            width={200}
            height={200}
            alt="Hanuman"
          />
          <Link
            href="/chalisa"
            className={`block mt-4  hover:underline ${
              darkMode ? "text-blue-200" : "text-blue-600"
            }`}
          >
            Read More..
          </Link>
        </div>
        {/* Card 1 */}
        <div
          className={`shadow-xl p-6 mt-2 rounded-lg ${
            darkMode
              ? "bg-gray-600 hover:bg-blue-950"
              : "bg-white hover:bg-gray-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">મંગલમૂર્તિ</h2>
          <Image
            src="/images/hanuman.png"
            width={200}
            height={200}
            alt="Hanuman"
          />
          <Link
            href="/mangalmurti"
            className={`block mt-4  hover:underline ${
              darkMode ? "text-blue-200" : "text-blue-600"
            }`}
          >
            Read More..
          </Link>
        </div>
        {/* Card 1 */}
        <div
          className={`shadow-xl p-6 mt-2 rounded-lg ${
            darkMode
              ? "bg-gray-600 hover:bg-blue-950"
              : "bg-white hover:bg-gray-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">આરતી</h2>
          <Image
            src="/images/hanuman.png"
            width={200}
            height={200}
            alt="Hanuman"
          />
          <Link
            href="/aarti"
            className={`block mt-4  hover:underline ${
              darkMode ? "text-blue-200" : "text-blue-600"
            }`}
          >
            Read More..
          </Link>
        </div>
        {/* Card 1 */}
        <div
          className={`shadow-xl p-6 mt-2 rounded-lg ${
            darkMode
              ? "bg-gray-600 hover:bg-blue-950"
              : "bg-white hover:bg-gray-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">થાળ</h2>
          <Image
            src="/images/hanuman.png"
            width={200}
            height={200}
            alt="Hanuman"
          />
          <Link
            href="/thal"
            className={`block mt-4  hover:underline ${
              darkMode ? "text-blue-200" : "text-blue-600"
            }`}
          >
            Read More..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
