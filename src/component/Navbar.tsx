import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { useDarkMode } from "../context/Darkmode";
import { theme } from "../utils/theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
const drawerWidth = 260;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

type props = {
  open: boolean;
  isSmallScreen: boolean;
  handleDrawerOpen: () => void;
};

const CustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Navbar = ({ open, handleDrawerOpen, isSmallScreen }: props) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <CustomAppBar
      position="fixed"
      open={open}
      sx={{
        backgroundColor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
        color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {(!isSmallScreen || (isSmallScreen && !open)) && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ ml: 1 }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            padding: "14px",
            cursor: "pointer",
          }}
        >
          {darkMode ? (
            <DarkModeIcon onClick={toggleDarkMode} />
          ) : (
            <LightModeIcon onClick={toggleDarkMode} />
          )}
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <span style={{ filter: darkMode ? "brightness(0) invert(1)" : "" }}>
              <Avatar alt="Jay shree ram" src="/images/hanuman.png" />
            </span>
          </StyledBadge>
        </div>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
