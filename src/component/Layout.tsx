"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "@/component/Sidebar";
import Navbar from "@/component/Navbar";
import { DarkModeProvider, useDarkMode } from "@/context/Darkmode";
import { theme } from "@/utils/theme";
import BottomLayout from "./BottomLayout";

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  // Add additional styles for smaller screens (600px or below)
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    marginLeft: 0,
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const { darkMode } = useDarkMode();
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const [isSmallScreen, setIsSmallScreen] = React.useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 600;
    }
    return false;
  });

  React.useEffect(() => {
    let body = document.querySelector("body");
    if (body !== null) {
      body.style.backgroundColor = darkMode
        ? theme.darkmodebodyBg
        : theme.lightmodebodyBg;
      body.style.color = darkMode ? theme.darkmodeClr : theme.lightmodeClr;
    }
  }, [darkMode]);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
        bgcolor: darkMode ? theme.darkmodebodyBg : theme.lightmodebodyBg,
      }}
    >
      <CssBaseline />
      <Navbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        isSmallScreen={isSmallScreen}
      />
      <Sidebar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        isSmallScreen={isSmallScreen}
      />
      <Main open={open} sx={{ minHeight: "100vh" }}>
        <DrawerHeader />
        {children}
        <BottomLayout />
      </Main>
    </Box>
  );
}
