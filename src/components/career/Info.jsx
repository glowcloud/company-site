import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import { work05 } from "../../assets";

const Info = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      display={{ xs: "block", md: "flex" }}
      textAlign={{ xs: "center", md: "left" }}
      pt={{ xs: 10, md: 20 }}
      pb={10}
      pl={{ xs: 0, md: 2, lg: 25, xl: 40 }}
      pr={{ xs: 0, md: 5, lg: 35, xl: 60 }}
      position="relative"
      sx={{
        "&::before": {
          content: "''",
          position: "absolute",
          background: "rgba(25, 118, 210, 0.3)",
          zIndex: -1,
          display: "block",
          height: "55rem",
          width: "55rem",
          top: { xs: "-7rem", sm: "-7rem", md: "-2rem", lg: "-3rem" },
          left: {
            xs: "-52rem",
            sm: "-47rem",
            md: "-51rem",
            lg: "-50rem",
            xl: "-42rem",
          },
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
          top: { xs: "-12rem", sm: "-12rem", md: "-7rem" },
          left: {
            xs: "-55rem",
            sm: "-50rem",
            md: "-55rem",
            lg: "-51rem",
            xl: "-43rem",
          },
          transform: "rotate(45deg)",
        },
      }}
    >
      <Box
        position="relative"
        sx={{
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
      <Box pl={{ xs: 5, sm: 20, md: 10 }} pr={{ xs: 5, sm: 20, md: 0 }}>
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          Lorem ipsum
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Typography pb={2} gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus
          ultrices tellus a venenatis. Nulla non tellus eu nibh pulvinar
          ullamcorper. Vivamus mollis accumsan luctus. Curabitur a eros sapien.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </Typography>
        <Typography pb={4} gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien
          dui, tempor sit amet rutrum et, dapibus nec ipsum. Nunc varius iaculis
          felis, in tristique massa tincidunt non.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/contact")}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Info;
