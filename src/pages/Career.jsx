import { Box } from "@mui/material";

import Banner from "../components/shared/Banner";
import Info from "../components/career/Info";
import Statistics from "../components/shared/Statistics";

const Career = () => {
  return (
    <Box pb={10}>
      <Banner text="Career" />
      <Info />
      <Statistics />
    </Box>
  );
};

export default Career;
