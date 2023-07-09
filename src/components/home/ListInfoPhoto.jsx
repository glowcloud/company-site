import { Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

import { work06 } from "../../assets";

const ListInfoPhoto = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: 95 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: isSmallScreen ? 0.6 : 0.4 }}
      mr={{ md: 2, lg: 0 }}
      mb={{ xs: 5, md: 0 }}
      sx={{
        position: "relative",
        "&::before": {
          content: "''",
          position: "absolute",
          border: "1px solid",
          borderColor: "rgba(25, 118, 210, 1)",
          zIndex: -1,
          display: "block",
          height: "85%",
          width: "100%",
          top: { xs: "5rem", md: "7rem" },
          left: "-3rem",
        },
        "&::after": {
          content: "''",
          position: "absolute",
          border: "1px solid",
          borderColor: "rgba(25, 118, 210, 1)",
          zIndex: -1,
          display: "block",
          height: "85%",
          width: "100%",
          top: "-3rem",
          left: "3rem",
        },
      }}
    >
      <Box
        component="img"
        src={work06}
        alt="Work Photo"
        height={{ xs: 550, md: 500 }}
        pb={{ xs: 5, md: 0 }}
        boxShadow="0px 10px 24px -4px rgba(144, 202, 249, 1)"
      />
    </Box>
  );
};

export default ListInfoPhoto;
