import { Box, Paper } from "@mui/material";

import { logo } from "../../assets";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="center"
      py={2}
      px={{ xs: 5, md: 2, lg: 0 }}
    >
      <ServiceCard
        headingText="For Clients"
        infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          fermentum massa."
      />

      <Box
        component={Paper}
        elevation={5}
        height={{ md: "345px", lg: "320px" }}
        width="400px"
        display={{ xs: "none", md: "flex" }}
        alignItems="center"
        justifyContent="center"
        zIndex={2}
        boxShadow="0px 10px 24px -4px rgba(144, 202, 249, 1)"
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          width="275x"
          height="275px"
        />
      </Box>

      <ServiceCard
        headingText="Employees"
        infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          fermentum massa."
      />
    </Box>
  );
};

export default Service;
