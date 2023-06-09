import { Box, Typography, Link } from "@mui/material";
import FooterLink from "./FooterLink";

import { LocationOn, LocalPhone, Mail } from "@mui/icons-material";

const FooterInfo = () => {
  return (
    <Box
      display="flex"
      width={{ xs: "100%", lg: "60%" }}
      justifyContent="center"
      alignItems={{ xs: "center", sm: "start" }}
      flexDirection={{ xs: "column", sm: "row" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", sm: "start" }}
        mx={2}
        mb={{ xs: 2, sm: 0 }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          textAlign={{ xs: "center", sm: "left" }}
          color="white"
          gutterBottom
        >
          Company
        </Typography>
        <FooterLink title="Home" page="/" />
        <FooterLink title="About Us" page="/about" />
        <FooterLink title="Career" page="/career" />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", sm: "start" }}
        mx={{ xs: 1, sm: 3 }}
        mb={{ xs: 2, sm: 0 }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          textAlign={{ xs: "center", sm: "left" }}
          color="white"
          gutterBottom
        >
          Support
        </Typography>
        <FooterLink title="Contact Us" page="/contact" />
      </Box>

      <Box display="flex" flexDirection="column" mx={2} mb={{ xs: 2, sm: 0 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          textAlign={{ xs: "center", sm: "left" }}
          color="white"
          gutterBottom
        >
          Get in Touch
        </Typography>

        <Box display="flex">
          <LocationOn sx={{ color: "white", mr: 1 }} />
          <FooterLink title="Warsaw, Poland" page="/contact" />
        </Box>

        <Box display="flex">
          <LocalPhone sx={{ color: "white", mr: 1 }} />
          <Link
            href="tel:+48-123-456-789"
            color="#fff"
            sx={{ textDecoration: "none" }}
            gutterBottom
          >
            +48 123 456 789
          </Link>
        </Box>

        <Box display="flex">
          <Mail sx={{ color: "white", mr: 1 }} />
          <Link
            href="mailto:contact@mail.com"
            color="#fff"
            sx={{ textDecoration: "none" }}
            gutterBottom
          >
            contact@mail.com
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterInfo;
