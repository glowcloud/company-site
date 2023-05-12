import { Box, Typography } from "@mui/material";

import { work00 } from "../../assets";

const Banner = ({ text }) => {
  return (
    <Box
      component="section"
      py={2}
      sx={{
        height: 300,
        backgroundImage: `url(${work00})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 1,
        "&::before": {
          content: '""',
          display: "block",
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: "#000",
          opacity: 0.5,
          top: 0,
          left: 0,
          zIndex: -1,
        },
      }}
    >
      <Typography
        variant="h1"
        textAlign="center"
        color="#fff"
        px={5}
        sx={{
          py: { xs: 10, md: 10 },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Banner;
