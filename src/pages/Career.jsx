import { Box } from "@mui/material";

import Banner from "../components/shared/Banner";
import Info from "../components/shared/Info";
import InfoText from "../components/career/InfoText";
import Statistics from "../components/shared/Statistics";

const Career = () => {
  return (
    <Box pb={10}>
      <Banner text="Career" />
      <Info textComponent={<InfoText />} />
      <Statistics />
    </Box>
  );
};

export default Career;
