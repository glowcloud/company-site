import { Box, Typography, Button } from "@mui/material";

import { profile00, profile01 } from "../../assets";
import Review from "./Review";

const Reviews = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={2}
      position="relative"
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

      <Box
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

      <Button variant="contained" size="large" sx={{ mt: { md: 5 } }}>
        Frequently Asked Questions
      </Button>
    </Box>
  );
};

export default Reviews;
