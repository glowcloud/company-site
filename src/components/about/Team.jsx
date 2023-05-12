import { Box, Typography } from "@mui/material";
import TeamMember from "./TeamMember";

import { founder00, founder01, founder02 } from "../../assets";

const Team = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py={5}
    >
      <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
        The Team
      </Typography>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Meet Our Founders
      </Typography>
      <TeamMember photo={founder00} />
      <TeamMember photo={founder01} />
      <TeamMember photo={founder02} />
    </Box>
  );
};

export default Team;
