import { Box } from "@mui/material";

import ListInfoPhoto from "./ListInfoPhoto";
import ListInfoText from "./ListInfoText";

const ListInfo = () => {
  return (
    <Box
      component="section"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={{ xs: "column-reverse", md: "row" }}
      px={{ xs: 1, md: 5, lg: 20 }}
      py={5}
      pb={10}
      mb={10}
    >
      <ListInfoText />
      <ListInfoPhoto />
    </Box>
  );
};

export default ListInfo;
