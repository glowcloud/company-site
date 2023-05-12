import { useLocation } from "react-router-dom";
import { Toolbar, Box } from "@mui/material";

import Footer from "./Footer";
import { useEffect } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ overflowY: "auto", overflowX: "hidden" }}
    >
      <Navbar />
      <Box component="main" sx={{ py: 2 }}>
        <Toolbar />
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
