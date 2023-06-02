import { Box } from "@mui/material";

import InfoPhoto from "./InfoPhoto";

const Info = ({ textComponent }) => {
  return (
    <Box
      component="section"
      display={{ xs: "block", md: "flex" }}
      textAlign={{ xs: "center", md: "left" }}
      pt={{ xs: 15, md: 20 }}
      pb={10}
      pl={{ xs: 0, md: 2, lg: 25, xl: 40 }}
      pr={{ xs: 0, md: 5, lg: 35, xl: 60 }}
      position="relative"
      sx={{
        "&::before": {
          content: "''",
          position: "absolute",
          background: "rgba(25, 118, 210, 0.3)",
          zIndex: -1,
          display: "block",
          height: "55rem",
          width: "55rem",
          top: { xs: "-5rem", md: "-2rem", lg: "-3rem" },
          left: {
            xs: "-52rem",
            sm: "-47rem",
            md: "-51rem",
            lg: "-50rem",
            xl: "-42rem",
          },
          transform: "rotate(45deg)",
        },
        "&::after": {
          content: "''",
          position: "absolute",
          background: "rgba(25, 118, 210, 0.1)",
          zIndex: -1,
          display: "block",
          height: "65rem",
          width: "65rem",
          top: { xs: "-10rem", md: "-7rem" },
          left: {
            xs: "-55rem",
            sm: "-50rem",
            md: "-55rem",
            lg: "-51rem",
            xl: "-43rem",
          },
          transform: "rotate(45deg)",
        },
      }}
    >
      <InfoPhoto />
      {textComponent}
    </Box>
  );
};

export default Info;
