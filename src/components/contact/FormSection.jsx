import { useState } from "react";
import { Box, Typography, Snackbar, Alert } from "@mui/material";
import { motion } from "framer-motion";
import Form from "./Form";

const FormSection = () => {
  const [isSnackbar, setIsSnackbar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbar(false);
  };

  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: 0.2 }}
      display="flex"
      flexDirection="column"
      width={{ xs: "100%", lg: "65%" }}
      px={{ xs: 3, sm: 5, md: 15, lg: 0 }}
      pb={{ xs: 5, lg: 0 }}
    >
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "left", fontWeight: "bold" }}
        >
          Send a Message
        </Typography>
        <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien
          dui, tempor sit amet rutrum et, dapibus nec ipsum. Nunc varius iaculis
          felis, in tristique massa tincidunt non.
        </Typography>
      </Box>

      <Form setIsSnackbar={setIsSnackbar} />

      <Snackbar open={isSnackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Message sent.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FormSection;
