import { Box } from "@mui/material";
import { motion } from "framer-motion";

import { businessWoman08 } from "../../assets";
import LandingText from "./LandingText";

const Landing = () => {
  return (
    <Box
      component="section"
      pt={{ xs: 15, md: 18, xl: 25 }}
      px={{ xs: 5, sm: 20, md: 5, lg: 20, xl: 40 }}
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

      <LandingText />

      <Box
        component={motion.img}
        initial={{ opacity: 0, x: 95 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        src={businessWoman08}
        alt="Landing Photo"
        height={500}
        display={{ xs: "none", md: "block" }}
        boxShadow="0px 10px 24px -4px rgba(144, 202, 249, 1)"
      />
    </Box>
  );
};

export default Landing;
