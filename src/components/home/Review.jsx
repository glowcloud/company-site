import { Box, Typography, Paper, Divider } from "@mui/material";

import { rating } from "../../assets";

const Review = ({ profile, name, title }) => {
  return (
    <Box
      component={Paper}
      width="100%"
      mx={2}
      mb={{ xs: 15, md: 0 }}
      position="relative"
      boxShadow="0px 10px 24px -4px rgba(144, 202, 249, 1)"
    >
      <Box
        component="img"
        src={profile}
        alt="Profile Picture"
        width="100px"
        position="absolute"
        left={25}
        top={-50}
      />
      <Typography sx={{ pt: 8, pb: 4, px: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien dui,
        tempor sit amet rutrum et, dapibus nec ipsum. Nunc varius iaculis felis,
        in tristique massa tincidunt non.
      </Typography>
      <Divider variant="middle" />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
        px={2}
      >
        <Box>
          <Typography fontWeight="bold">{name}</Typography>
          <Typography>{title}</Typography>
        </Box>
        <Box component="img" src={rating} alt="5 Star Rating" />
      </Box>
    </Box>
  );
};

export default Review;
