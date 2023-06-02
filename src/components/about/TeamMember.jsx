import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const TeamMember = ({ photo }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Box
      component={motion.div}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: isSmallScreen ? 0.5 : 0.25,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isSmallScreen ? 0.25 : 0.5 }}
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      alignItems="center"
      py={5}
      px={{ xs: 5, sm: 15, md: 35, lg: 18, xl: 20 }}
    >
      <Box
        component={motion.img}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
        }}
        src={photo}
        alt="Founder Photo"
        height={400}
      />
      <Box px={{ xs: 0, lg: 8 }} pt={{ xs: 5, lg: 0 }}>
        <Box
          component={motion.div}
          variants={{
            hidden: { opacity: 0, x: -35 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                x: { stiffness: 1000, velocity: -100 },
              },
            },
          }}
          borderLeft="5px solid #90caf9"
          px={3}
          mb={2}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Name Surname
          </Typography>
          <Typography variant="h6" gutterBottom>
            Title
          </Typography>
        </Box>
        <Typography
          component={motion.p}
          variants={{
            hidden: { opacity: 0, x: -35 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                x: { stiffness: 1000, velocity: -100 },
              },
            },
          }}
          gutterBottom
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          fermentum massa. Vivamus ullamcorper libero magna, sed cursus ante
          placerat at. Quisque eget scelerisque est. Aliquam erat volutpat. Ut
          consequat sapien sed sodales sodales. Sed sit amet ipsum nulla. Cras
          dapibus ac mauris eu condimentum. Mauris massa nulla, congue a posuere
          sed, mattis sit amet orci.
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamMember;
