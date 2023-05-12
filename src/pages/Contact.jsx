import { Box } from "@mui/material";

import Banner from "../components/shared/Banner";
import ContactInfo from "../components/contact/ContactInfo";
import FormSection from "../components/contact/FormSection";

const Contact = () => {
  return (
    <Box>
      <Banner text={"Contact"} />
      <Box
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems="center"
        justifyContent="space-between"
        py={10}
        mx={{ xs: 0, lg: 15, xl: 35 }}
      >
        <FormSection />
        <ContactInfo />
      </Box>
    </Box>
  );
};

export default Contact;
