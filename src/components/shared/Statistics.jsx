import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Statistic from "./Statistic";

const Statistics = () => {
  return (
    <Box
      component={motion.section}
      variants={{
        hidden: { opacity: 0, y: 100, scale: 0.8 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2,
            y: {
              stiffness: 1000,
              velocity: -100,
            },
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      m={{ xs: 5, md: 10 }}
      py={10}
      px={{ md: 5, lg: 15, xl: 25 }}
      boxShadow="0px 10px 24px -4px rgba(144, 202, 249, 1)"
    >
      <Statistic headingText="350+" infoText="Satisfied Clients" />
      <Statistic headingText="100+" infoText="Employees" />
      <Statistic headingText="2" infoText="Offices" />
      <Statistic headingText="20" infoText="Long Term Partners" />
    </Box>
  );
};

export default Statistics;
