"use client";
import { DarkModeProvider } from "@/context/Darkmode";
import React from "react";
import Layout from "@/component/Layout";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DarkModeProvider>
      <Layout>{children}</Layout>
    </DarkModeProvider>
  );
};

export default MainLayout;
