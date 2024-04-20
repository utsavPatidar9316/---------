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
      <Link href="/">
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          showLabel // Use showLabel directly on BottomNavigationAction
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
      <Link href="/">
        <BottomNavigationAction
          label="Settings"
          icon={<SettingsIcon />}
          showLabel // Use showLabel directly on BottomNavigationAction
          sx={{ filter: darkMode ? "brightness(0) invert(1)" : "" }}
        />
      </Link>
      <Link href="/">
        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsIcon />}
          showLabel // Use showLabel directly on BottomNavigationAction
          sx={{ filter: darkMode ? "brightness(0) invert(1)" : "" }}
        />
      </Link>
    </BottomNavigation>
  );
};

export default BottomLayout;
