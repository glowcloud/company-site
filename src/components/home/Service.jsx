import { Box, Paper, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

import { logo } from "../../assets";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="center"
      py={2}
      px={{ xs: 5, md: 2, lg: 0 }}
      component={motion.section}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delayChildren: isSmallScreen ? 0.25 : 0.4,
            y: { stiffness: 1000, velocity: -100 },
            duration: 0.5,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <ServiceCard
        headingText="For Clients"
        infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          fermentum massa."
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              x: { stiffness: 1000, velocity: -100 },
            },
          },
        }}
      />

      <Box
        component={Paper}
        elevation={5}
        height={{ md: "345px", lg: "320px" }}
        width="400px"
        display={{ xs: "none", md: "flex" }}
        alignItems="center"
        justifyContent="center"
        zIndex={2}
        boxShadow="0px 10px 24px -4px rgba(144, 202, 249, 1)"
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          width="275x"
          height="275px"
        />
      </Box>

      <ServiceCard
        headingText="Employees"
        infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          fermentum massa."
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              x: { stiffness: 1000, velocity: -100 },
            },
          },
        }}
      />
    </Box>
  );
};

export default Service;
