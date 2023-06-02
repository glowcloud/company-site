import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
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
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.75 }}
        transition={{ duration: 0.5 }}
        textAlign="center"
      >
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          The Team
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Meet Our Founders
        </Typography>
      </Box>
      <TeamMember photo={founder00} />
      <TeamMember photo={founder01} />
      <TeamMember photo={founder02} />
    </Box>
  );
};

export default Team;
