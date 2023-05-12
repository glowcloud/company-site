import { Box, Typography } from "@mui/material";
import Statistic from "./Statistic";

const Statistics = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      m={{ xs: 5, md: 10 }}
      py={10}
      px={{ md: 5, lg: 15, xl: 25 }}
      boxShadow="0px 10px 24px -4px rgba(144, 202, 249, 1)"
    >
      <Statistic headingText="350+" infoText="Satisfied Clients" />
      <Statistic headingText="100+" infoText="Employees" />
      <Statistic headingText="2" infoText="Offices" />
      <Statistic headingText="20" infoText="Long Term Partners" />
    </Box>
  );
};

export default Statistics;
