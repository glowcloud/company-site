import { Box, Typography } from "@mui/material";

const TeamMember = ({ photo }) => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      alignItems="center"
      py={5}
      px={{ xs: 5, sm: 15, md: 35, lg: 18, xl: 20 }}
    >
      <Box component="img" src={photo} alt="Founder Photo" height={400} />
      <Box px={{ xs: 0, lg: 8 }} pt={{ xs: 5, lg: 0 }}>
        <Box borderLeft="5px solid #90caf9" px={3} mb={2}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Name Surname
          </Typography>
          <Typography variant="h6" gutterBottom>
            Title
          </Typography>
        </Box>
        <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          fermentum massa. Vivamus ullamcorper libero magna, sed cursus ante
          placerat at. Quisque eget scelerisque est. Aliquam erat volutpat. Ut
          consequat sapien sed sodales sodales. Sed sit amet ipsum nulla. Cras
          dapibus ac mauris eu condimentum. Mauris massa nulla, congue a posuere
          sed, mattis sit amet orci.
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamMember;
