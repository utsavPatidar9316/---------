"use client";
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDarkMode } from "@/context/Darkmode";
import Link from "next/link";
import { theme } from "@/utils/theme";
import { usePathname } from "next/navigation";
const BottomLayout = () => {
  const { darkMode } = useDarkMode();
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <BottomNavigation
      showLabels
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Ensure it's above other content
        color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
        bgcolor: darkMode ? theme.darkmodebodyBg : theme.lightmodebodyBg,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div>
        <Link href="/">
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            style={{
              backgroundColor: isActive("/")
                ? darkMode
                  ? "#1e293b"
                  : theme.lightmodeBg
                : "inherit",
            }}
            sx={{
              filter: isActive("/")
                ? ""
                : darkMode
                ? "brightness(0) invert(1)"
                : "",
            }}
          />
        </Link>
        <BottomNavigationAction
          label="Settings"
          icon={<SettingsIcon />}
          sx={{ filter: darkMode ? "brightness(0) invert(1)" : "" }}
        />
        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsIcon />}
          sx={{ filter: darkMode ? "brightness(0) invert(1)" : "" }}
        />
      </div>
    </BottomNavigation>
  );
};

export default BottomLayout;
