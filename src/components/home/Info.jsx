import { Box } from "@mui/material";

import InfoPhotos from "./InfoPhotos";
import InfoText from "./InfoText";

const Info = () => {
  return (
    <Box
      component="section"
      display={{ xs: "block", md: "flex" }}
      textAlign={{ xs: "center", md: "left" }}
      pt={{ xs: 10, md: 20 }}
      pb={10}
      pl={{ xs: 0, md: 2, lg: 25, xl: 35 }}
      pr={{ xs: 0, md: 5, lg: 10, xl: 45 }}
    >
      <InfoPhotos />
      <InfoText />
    </Box>
  );
};

export default Info;
