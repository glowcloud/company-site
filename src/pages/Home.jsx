import { Box } from "@mui/material";

import Landing from "../components/home/Landing";
import Info from "../components/home/Info";
import ListInfo from "../components/home/ListInfo";
import Service from "../components/home/Service";
import Reviews from "../components/home/Reviews";

const Home = () => {
  return (
    <Box pb={10}>
      <Landing />
      <Service />
      <Info />
      <ListInfo />
      <Reviews />
    </Box>
  );
};

export default Home;
