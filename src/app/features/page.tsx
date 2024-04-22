"use client";
import React from "react";
import { useDarkMode as darkmodeContext } from "@/context/Darkmode";
import Link from "next/link";
import Image from "next/image";
import { featuresData } from "@/utils/sidebarData";

const page = () => {
  const { darkMode } = darkmodeContext();
  return (
    <div
      className="flex items-center justify-center px-8 pt-4 pb-14"
      style={{ minHeight: "85vh" }}
    >
      <div className="grid grid-cols-2 gap-8 max-w-3xl text-center">
        {featuresData.map((x) => {
          return (
            <React.Fragment key={x.id}>
              <Link
                href={x.href}
                className={`block mt-4  hover:underline text-xs ${
                  darkMode ? "text-blue-200" : "text-blue-600"
                }`}
              >
                <div
                  className={`shadow-xl p-6 mt-2 rounded-lg ${
                    darkMode
                      ? "bg-gray-600 hover:bg-blue-950"
                      : "bg-white hover:bg-gray-200"
                  }`}
                >
                  <h2 className="text-xl font-semibold mb-4">{x.title}</h2>
                  <span
                    style={{
                      filter: darkMode ? "brightness(0) invert(1)" : "",
                    }}
                  >
                    <Image
                      src={x.images}
                      width={200}
                      height={200}
                      alt="Hanuman"
                    />
                  </span>
                  Read More..
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default page;
