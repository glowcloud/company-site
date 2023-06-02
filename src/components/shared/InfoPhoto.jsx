import { Box } from "@mui/material";
import { motion } from "framer-motion";

import { work05 } from "../../assets";

const InfoPhoto = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: -95 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      position="relative"
      sx={{
        mb: { xs: 10, sm: 0 },
        "&::after": {
          content: "''",
          position: "absolute",
          border: "1px solid",
          borderColor: "rgba(25, 118, 210, 1)",
          zIndex: -1,
          display: { xs: "none", md: "block" },
          height: "480px",
          width: "100%",
          top: "3rem",
          left: "3rem",
        },
        "&::before": {
          content: "''",
          position: "absolute",
          border: "1px solid",
          borderColor: "rgba(25, 118, 210, 1)",
          zIndex: -1,
          display: { xs: "none", lg: "block" },
          height: "480px",
          width: "100%",
          top: "-2rem",
          left: "-3rem",
        },
      }}
    >
      <Box
        component="img"
        src={work05}
        alt="Employee Photo"
        height={500}
        textAlign="center"
        mb={{ xs: 5, md: 0 }}
      />
    </Box>
  );
};

export default InfoPhoto;
