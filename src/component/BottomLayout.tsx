import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
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
      sx={{
        position: "fixed",
        bottom: -12,
        left: 0,
        right: 0,
        zIndex: 1000, // Ensure it's above other content
        color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
        bgcolor: darkMode ? theme.darkmodebodyBg : theme.lightmodebodyBg,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link href="/">
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          showLabel
          sx={{
            color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
            bgcolor: isActive("/")
              ? darkMode
                ? "#1e293b"
                : "#bfc2c5"
              : darkMode
              ? theme.darkmodebodyBg
              : theme.lightmodebodyBg,
          }}
        />
      </Link>
      <Link href="/features">
        <BottomNavigationAction
          label="Features"
          icon={<SettingsSuggestRoundedIcon />}
          showLabel
          sx={{
            color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
            bgcolor: isActive("/features")
              ? darkMode
                ? "#1e293b"
                : "#bfc2c5"
              : darkMode
              ? theme.darkmodebodyBg
              : theme.lightmodebodyBg,
          }}
        />
      </Link>
      <Link href="/notification">
        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsIcon />}
          showLabel
          sx={{
            color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
            bgcolor: isActive("/notification")
              ? darkMode
                ? "#1e293b"
                : "#bfc2c5"
              : darkMode
              ? theme.darkmodebodyBg
              : theme.lightmodebodyBg,
          }}
        />
      </Link>
    </BottomNavigation>
  );
};

export default BottomLayout;
