"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { usePathname } from "next/navigation";
import { sidebarData } from "../utils/sidebarData";
import { useDarkMode } from "../context/Darkmode";
import { theme } from "../utils/theme";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";

const drawerWidth = 260;

type props = {
  open: boolean;
  isSmallScreen: boolean;
  handleDrawerOpen: () => void;
};

const Sidebar = ({ open, handleDrawerOpen, isSmallScreen }: props) => {
  const { darkMode } = useDarkMode();
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
          bgcolor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
        },
      }}
      variant={isSmallScreen ? "temporary" : "persistent"}
      anchor="left"
      open={open}
      onClose={handleDrawerOpen}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <div
        style={{
          padding: "1rem 0.5rem 1.5rem",
          display: "flex",
          marginRight: 0,
          gap: isSmallScreen ? 4 : 4,
        }}
      >
        <Image
          src="/images/kesrinandan.png"
          alt="mandalPhoto"
          width={70}
          height={70}
        />
        <span className="font-bold" style={{ alignSelf: "center" }}>
          કેસરીનંદન ધૂનમંડળ
        </span>
        {isSmallScreen && (
          <span style={{ alignSelf: "center", cursor: "pointer" }}>
            <FirstPageRoundedIcon onClick={handleDrawerOpen} />
          </span>
        )}
      </div>
      <List>
        {sidebarData.map((x, index) => (
          <Link href={x.path} key={index}>
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  backgroundColor: isActive(x.path)
                    ? darkMode
                      ? "#0f172a"
                      : "rgb(229 231 235)"
                    : "inherit",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "30px",
                    filter: darkMode ? "brightness(0) invert(1)" : "",
                  }}
                >
                  <Image src={x.icon} width={50} height={50} alt={x.text} />
                </ListItemIcon>
                <ListItemText primary={x.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <div
        style={{
          marginTop: "auto",
          padding: "1rem",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Developed by{" "}
          <Link href="https://github.com/utsavPatidar9316/" target="_blank">
            Utsav{" "}
          </Link>
        </span>{" "}
        <Avatar
          alt="Utsav Patel"
          src="/images/file.enc"
          sx={{ marginLeft: "0.5rem" }}
        />
      </div>
      <div className="text-center mt-2">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          &copy; કેસરીનંદન ધૂનમંડળ 2024
        </span>
      </div>
    </Drawer>
  );
};

export default Sidebar;
