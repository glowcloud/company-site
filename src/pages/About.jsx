import { Box, Typography } from "@mui/material";

import Banner from "../components/shared/Banner";
import Info from "../components/about/Info";
import Team from "../components/about/Team";
import Statistics from "../components/shared/Statistics";

const About = () => {
  return (
    <Box pb={10}>
      <Banner text="About" />
      <Info />
      <Team />
      <Statistics />
    </Box>
  );
};

export default About;
