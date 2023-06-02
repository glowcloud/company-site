import { Box, Typography, List, ListItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ListInfoText = () => {
  const navigate = useNavigate();

  return (
    <Box
      px={{ lg: 5 }}
      textAlign={{ xs: "center", md: "left" }}
      component={motion.div}
      variants={{
        hidden: { opacity: 0, x: -95 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            delayChildren: 0.35,
            staggerChildren: 0.25,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
        Lorem ipsum
      </Typography>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Lorem ipsum dolor sit amet
      </Typography>

      <List sx={{ listStyleType: "disc", pl: 5, pb: 3, width: { md: "90%" } }}>
        {[...Array(5)].map((item, index) => (
          <ListItem
            key={index}
            sx={{ display: "list-item", pl: 0 }}
            component={motion.li}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
              },
            }}
          >
            <Typography fontSize="1.2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </ListItem>
        ))}
      </List>

      <Button
        component={motion.button}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
          },
        }}
        variant="contained"
        size="large"
        onClick={() => navigate("/contact")}
      >
        Register Now
      </Button>
    </Box>
  );
};

export default ListInfoText;
