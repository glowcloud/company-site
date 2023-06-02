import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Statistic = ({ headingText, infoText }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={{ xs: 2, md: 0 }}
    >
      <Box>
        {headingText.split("").map((char, index) => (
          <Typography
            key={index}
            component={motion.span}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            variant="h2"
            fontWeight="bold"
            color="primary"
          >
            {char}
          </Typography>
        ))}
      </Box>
      <Typography
        component={motion.h6}
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              y: { stiffness: 1000, velocity: -100 },
            },
          },
        }}
        variant="h6"
      >
        {infoText}
      </Typography>
    </Box>
  );
};

export default Statistic;
