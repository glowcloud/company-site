import { Box } from "@mui/material";

import { work05, work07 } from "../../assets";
import { motion } from "framer-motion";

const InfoPhotos = () => {
  return (
    <Box
      position="relative"
      pb={{ md: 10 }}
      mb={15}
      sx={{
        "&::before": {
          content: "''",
          position: "absolute",
          background: "rgba(25, 118, 210, 0.3)",
          zIndex: -1,
          display: "block",
          height: "55rem",
          width: "55rem",
          top: { xs: "-12rem", md: "1rem" },
          left: { xs: "-45rem", md: "-50rem" },
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
          top: { xs: "-17rem", md: "-5rem" },
          left: { xs: "-47rem", md: "-51rem" },
          transform: "rotate(45deg)",
        },
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -95 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        sx={{
          position: "relative",
          "&::after": {
            content: "''",
            position: "absolute",
            border: "1px solid",
            borderColor: "rgba(25, 118, 210, 1)",
            zIndex: -1,
            display: { xs: "none", md: "block" },
            height: "100%",
            width: "100%",
            top: "3rem",
            left: "3rem",
          },
        }}
      >
        <Box component="img" src={work05} alt="Employee Photo" height={500} />
      </Box>
      <Box
        component={motion.img}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        src={work07}
        alt="Teamwork Photo"
        height={250}
        position="absolute"
        left={180}
        top={{ md: 400, lg: 360 }}
        display={{ xs: "none", md: "block" }}
      />
    </Box>
  );
};

export default InfoPhotos;
