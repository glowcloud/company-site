import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import { logo } from "../../assets";

const Navbar = () => {
  const [drawerMobileOpen, setDrawerMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    { title: "Home", page: "/" },
    { title: "About", page: "/about" },
    { title: "Career", page: "/career" },
    { title: "FAQ", page: "/faq" },
    { title: "Contact", page: "/contact" },
  ];

  useEffect(() => {
    setDrawerMobileOpen(false);
  }, [pathname]);

  const handleMenuClick = () => {
    setDrawerMobileOpen((prevDrawerMobileOpen) => !prevDrawerMobileOpen);
  };

  return (
    <AppBar component="nav" position="fixed" sx={{ px: { lg: 10 }, top: -1 }}>
      <Toolbar sx={{ py: 2 }}>
        <Box
          sx={{ flexGrow: 1 }}
          display="flex"
          alignItems="center"
          justifyContent={{ xs: "center", lg: "flex-start" }}
          onClick={() => navigate("/")}
        >
          <Box
            sx={{ width: "50px", height: "50px", cursor: "pointer" }}
            component="img"
            src={logo}
            alt="Logo"
            ml={{ xs: 5, lg: 0 }}
          />
          <Typography
            variant="h5"
            sx={{
              px: 2,
              cursor: "pointer",
              display: { xs: "none", lg: "block" },
            }}
          >
            Knight Tech
          </Typography>
        </Box>

        <Box display={{ xs: "none", lg: "block" }}>
          {navItems.map((item) => (
            <Button
              key={item.title}
              sx={{
                mx: 1,
                px: 2,
                color: pathname === item.page ? "black" : "white",
                backgroundColor: pathname === item.page ? "white" : "",
                "&:hover": {
                  color: "black",
                  backgroundColor: "white",
                },
              }}
              onClick={() => navigate(item.page)}
            >
              {item.title}
            </Button>
          ))}
        </Box>

        <Box display={{ xs: "block", lg: "none" }}>
          <IconButton color="inherit" onClick={handleMenuClick}>
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="right"
        sx={{
          display: { xs: "block", lg: "none" },
          width: 240,
          "& .MuiDrawer-paper": {
            width: 300,
            mt: 10.2,
            boxSizing: "border-box",
          },
        }}
        open={drawerMobileOpen}
        onClose={handleMenuClick}
      >
        <List disablePadding sx={{ pt: 10 }}>
          {navItems.map((item) => (
            <ListItemButton key={item.title} sx={{ px: 3 }}>
              <ListItemText
                primary={item.title}
                sx={{
                  color: pathname === item.page ? "#90caf9" : "",
                  textAlign: "right",
                  borderRight:
                    pathname === item.page ? "5px solid #90caf9" : "none",
                  px: pathname === item.page ? 1 : 1.65,
                }}
                onClick={() => navigate(item.page)}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
