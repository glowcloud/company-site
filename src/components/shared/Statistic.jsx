import { Box, Typography } from "@mui/material";

const Statistic = ({ headingText, infoText }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={{ xs: 2, md: 0 }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        color="primary"
        textAlign="center"
      >
        {headingText}
      </Typography>
      <Typography variant="h6" textAlign="center">
        {infoText}
      </Typography>
    </Box>
  );
};

export default Statistic;
