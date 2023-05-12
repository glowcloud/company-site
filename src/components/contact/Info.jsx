import { Box, Typography } from "@mui/material";

const Info = ({ headingText, infoText }) => {
  return (
    <Box>
      <Typography
        variant="h6"
        fontWeight="bold"
        color="white"
        gutterBottom
        sx={{ borderLeft: "5px solid #90caf9", pl: 1 }}
      >
        {headingText}
      </Typography>
      <Typography color="#f0f0f0" sx={{ pt: 1 }}>
        {infoText}
      </Typography>
    </Box>
  );
};

export default Info;
