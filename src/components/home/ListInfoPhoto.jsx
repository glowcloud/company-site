import { Box } from "@mui/material";
import { motion } from "framer-motion";

import { work06 } from "../../assets";

const ListInfoPhoto = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: 95 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.35 }}
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
      />
    </Box>
  );
};

export default ListInfoPhoto;
