import { useState } from "react";
import { Box, Typography, Snackbar, Alert } from "@mui/material";
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
      component="section"
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
