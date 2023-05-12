import { Box, Typography, List, ListItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { work06 } from "../../assets";

const ListInfo = () => {
  const navigate = useNavigate();

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
      <Box px={{ lg: 5 }} textAlign={{ xs: "center", md: "left" }}>
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          Lorem ipsum
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Lorem ipsum dolor sit amet
        </Typography>

        <List
          sx={{ listStyleType: "disc", pl: 5, pb: 3, width: { md: "90%" } }}
        >
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <Typography fontSize="1.2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <Typography fontSize="1.2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <Typography fontSize="1.2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <Typography fontSize="1.2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <Typography fontSize="1.2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </ListItem>
        </List>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/contact")}
        >
          Register Now
        </Button>
      </Box>

      <Box
        mr={{ md: 2, lg: 0 }}
        mb={{ xs: 5, md: 0 }}
        sx={{
          position: "relative",
          "&::before": {
            content: "''",
            position: "absolute",
            border: "1px solid",
            borderColor: "rgba(25, 118, 210, 1)",
            zIndex: -1,
            display: "block",
            height: "85%",
            width: "100%",
            top: { xs: "5rem", md: "7rem" },
            left: "-3rem",
          },
          "&::after": {
            content: "''",
            position: "absolute",
            border: "1px solid",
            borderColor: "rgba(25, 118, 210, 1)",
            zIndex: -1,
            display: "block",
            height: "85%",
            width: "100%",
            top: "-3rem",
            left: "3rem",
          },
        }}
      >
        <Box
          component="img"
          src={work06}
          alt="Work Photo"
          height={{ xs: 550, md: 500 }}
          pb={{ xs: 5, md: 0 }}
        />
      </Box>
    </Box>
  );
};

export default ListInfo;
