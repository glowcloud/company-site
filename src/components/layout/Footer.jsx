import { Box } from "@mui/material";

import FooterLogo from "./FooterLogo";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      width="100%"
      alignItems="center"
      py={4}
      px={{xs: 0, md: 25}}
      backgroundColor="#1976d2"
    >
      <FooterLogo />
      <FooterInfo />
    </Box>
  );
};

export default Footer;
