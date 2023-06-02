import { Box } from "@mui/material";
import { motion } from "framer-motion";

import Info from "./Info";

const ContactInfo = () => {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: 0.2 }}
      height="30rem"
      backgroundColor="#2196f3"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      borderRadius={3}
      pl={{ xs: 5, sm: 10, md: 10, lg: 5 }}
      pr={{ xs: 10, sm: 35, md: 50, lg: 10 }}
      py={8}
    >
      <Info headingText="Location" infoText="Warsaw, Poland" />
      <Info headingText="Phone" infoText="+48 123 456 789" />
      <Info headingText="Email" infoText="contact@mail.com" />
      <Info headingText="Hours" infoText="Mon to Fri: 9am to 5pm" />
    </Box>
  );
};

export default ContactInfo;
