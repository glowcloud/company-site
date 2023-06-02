import { Box } from "@mui/material";

import Banner from "../components/shared/Banner";
import Info from "../components/shared/Info";
import InfoText from "../components/about/InfoText";
import Team from "../components/about/Team";
import Statistics from "../components/shared/Statistics";

const About = () => {
  return (
    <Box pb={10}>
      <Banner text="About" />
      <Info textComponent={<InfoText />} />
      <Team />
      <Statistics />
    </Box>
  );
};

export default About;
