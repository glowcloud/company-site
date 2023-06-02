import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const InfoText = () => {
  const navigate = useNavigate();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: 75 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      pl={{ xs: 5, sm: 20, md: 10 }}
      pr={{ xs: 5, sm: 20, md: 0 }}
      position="relative"
    >
      <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
        Lorem ipsum
      </Typography>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Typography>
      <Typography pb={2} gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus
        ultrices tellus a venenatis. Nulla non tellus eu nibh pulvinar
        ullamcorper. Vivamus mollis accumsan luctus.
      </Typography>
      <Typography pb={4} gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien dui,
        tempor sit amet rutrum et, dapibus nec ipsum. Nunc varius iaculis felis,
        in tristique massa tincidunt non.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          position: { md: "absolute" },
          top: { md: 525 },
          left: { md: 275 },
        }}
        onClick={() => navigate("/about")}
      >
        About Knight Tech
      </Button>
    </Box>
  );
};

export default InfoText;
