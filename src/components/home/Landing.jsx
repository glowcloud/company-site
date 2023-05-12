import { Box, Button, Typography } from "@mui/material";

import { businessWoman08 } from "../../assets";

const Landing = () => {
  return (
    <Box
      component="section"
      pt={25}
      px={{ xs: 5, sm: 20, md: 5, lg: 20, xl: 45 }}
      pb={10}
      mb={5}
      display="flex"
      justifyContent="center"
      position="relative"
    >
      <Box
        position="absolute"
        sx={{
          background: "rgba(25, 118, 210, 0.1)",
          zIndex: -1,
          display: "block",
          height: "75rem",
          width: "75rem",
          top: "-52rem",
          left: "-25rem",
          transform: "rotate(-29deg)",
          "&::after": {
            content: "''",
            position: "absolute",
            background: "rgba(25, 118, 210, 0.1)",
            zIndex: -1,
            display: "block",
            height: "75rem",
            width: "75rem",
            top: "7rem",
            left: "-22rem",
          },
          "&::before": {
            content: "''",
            position: "absolute",
            background: "rgba(25, 118, 210, 0.1)",
            zIndex: -1,
            display: "block",
            height: "75rem",
            width: "75rem",
            top: "14rem",
            left: "-32rem",
          },
        }}
      />
      <Box
        pr={{ xs: 0, md: 4, lg: 5, xl: 5 }}
        textAlign={{ xs: "center", md: "left" }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography pr={{ xs: 0, md: 10, lg: 20 }} gutterBottom>
          Nunc varius iaculis felis, in tristique massa tincidunt non. Maecenas
          egestas diam eget metus malesuada, eget commodo lacus commodo. Ut
          tincidunt ante tellus, at aliquet eros bibendum sed.
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 5 }}>
          Get Started
        </Button>
      </Box>

      <Box
        component="img"
        src={businessWoman08}
        alt="Landing Photo"
        height={500}
        display={{ xs: "none", md: "block" }}
      />
    </Box>
  );
};

export default Landing;
