import { Box, Typography } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { motion } from "framer-motion";

const Question = () => {
  return (
    <Box py={2}>
      <Box
        component={motion.div}
        variants={{
          hidden: { opacity: 0, y: -35, scale: 0.8 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
      >
        <QuestionAnswerIcon color="primary" />
        <Typography component="span" variant="h5" fontWeight="bold">
          {" "}
          Question
        </Typography>
      </Box>
      <Typography
        gutterBottom
        sx={{ pl: 7, pt: 1 }}
        component={motion.p}
        variants={{
          hidden: { opacity: 0, y: -35, scale: 0.8 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien dui,
        tempor sit amet rutrum et, dapibus nec ipsum. Nunc varius iaculis felis,
        in tristique massa tincidunt non.
      </Typography>
    </Box>
  );
};

export default Question;
