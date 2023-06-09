import { Box, Typography, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ headingText, infoText, variants }) => {
  const navigate = useNavigate();

  return (
    <Box
      elevation={3}
      height={{ md: "275px", lg: "250px" }}
      width={{ md: "350px" }}
      mt={{ xs: 2, sm: "70px" }}
      p={5}
      zIndex={1}
      boxShadow="0px 10px 24px -4px rgba(144, 202, 249, 1)"
      component={motion.div}
      variants={variants}
      backgroundColor="white"
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {headingText}
      </Typography>
      <Typography gutterBottom>{infoText}</Typography>
      <Button
        variant="contained"
        size="large"
        sx={{ my: 2 }}
        onClick={() => navigate("/contact")}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default ServiceCard;
