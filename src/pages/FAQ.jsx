import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import Question from "../components/faq/Question";
import Banner from "../components/shared/Banner";

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <Box pb={10}>
      <Banner text={"FAQ"} />

      <Box
        component="section"
        py={10}
        px={{ xs: 5, sm: 10, md: 20, lg: 30, xl: 40 }}
        sx={{
          "&::before": {
            content: "''",
            position: "absolute",
            background: "rgba(25, 118, 210, 0.3)",
            zIndex: -1,
            display: "block",
            height: "55rem",
            width: "55rem",
            top: { xs: "70%", lg: "55%" },
            left: {xs: "-60rem", sm: "-50rem"},
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
            top: { xs: "60%", lg: "45%" },
            left: {xs: "-63rem", sm: "-51rem"},
            transform: "rotate(45deg)",
          },
        }}
      >
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </Box>

      <Box component="section" textAlign="center">
        <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
          Still have questions?
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 1 }}
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default FAQ;
