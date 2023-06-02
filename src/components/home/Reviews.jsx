import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

import { profile00, profile01 } from "../../assets";
import Review from "./Review";

const Reviews = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={2}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.75 }}
        transition={{ duration: 0.5 }}
        textAlign="center"
      >
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          Reviews
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          px={{ xs: 5, sm: 15, md: 0 }}
          gutterBottom
        >
          Read what people think about Tech Knight
        </Typography>
      </Box>

      <Box
        component={motion.div}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.25,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: isSmallScreen ? 0.25 : 0.5 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
        pt={10}
        pb={{ xs: 0, md: 10 }}
        px={{ xs: 5, sm: 15, md: 0, lg: 5, xl: 35 }}
      >
        <Review profile={profile01} name="Jane Doe" title="Client" />
        <Review profile={profile00} name="John Doe" title="Partner" />
        <Review profile={profile00} name="John Doe" title="Employee" />
      </Box>

      <Button
        component={motion.button}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: isSmallScreen ? 0.25 : 0.5 }}
        transition={{ duration: 0.35 }}
        variant="contained"
        size="large"
        sx={{ mt: { md: 5 } }}
      >
        Frequently Asked Questions
      </Button>
    </Box>
  );
};

export default Reviews;
