import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { logo } from "../../assets";

const FooterLogo = () => {
  const navigate = useNavigate();

  return (
    <Box
      width={{ xs: "100%", lg: "40%" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      onClick={() => navigate("/")}
      pb={{ xs: 5, lg: 0 }}
    >
      <Box
        component="img"
        src={logo}
        alt="Logo"
        width="190px"
        height="190px"
        sx={{ cursor: "pointer" }}
      />
      <Typography
        variant="h4"
        fontWeight="bold"
        color="white"
        sx={{ pt: 1, cursor: "pointer", textAlign: "center" }}
      >
        Knight Tech
      </Typography>
    </Box>
  );
};

export default FooterLogo;
