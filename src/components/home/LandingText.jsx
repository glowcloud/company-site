import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const LandingText = () => {
  return (
    <Box
      pr={{ xs: 0, md: 4, lg: 5, xl: 5 }}
      textAlign={{ xs: "center", md: "left" }}
      component={motion.div}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delayChildren: 0.1, staggerChildren: 0.25 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        gutterBottom
        component={motion.h2}
        variants={{
          hidden: { opacity: 0, y: -95 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              y: { stiffness: 1000, velocity: -100 },
              duration: 0.35,
            },
          },
        }}
      >
        Lorem ipsum dolor sit amet
      </Typography>
      <Typography
        pr={{ xs: 0, md: 10, lg: 20 }}
        gutterBottom
        component={motion.p}
        variants={{
          hidden: { opacity: 0, x: -95 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              x: { stiffness: 1000, velocity: -100 },
              duration: 0.35,
            },
          },
        }}
      >
        Nunc varius iaculis felis, in tristique massa tincidunt non. Maecenas
        egestas diam eget metus malesuada, eget commodo lacus commodo. Ut
        tincidunt ante tellus, at aliquet eros bibendum sed.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 5 }}
        component={motion.button}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              y: { stiffness: 1000, velocity: -100 },
              duration: 0.35,
            },
          },
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default LandingText;
