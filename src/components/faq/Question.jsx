import { Box, Typography } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const Question = () => {
  return (
    <Box py={2}>
      <QuestionAnswerIcon color="primary" />
      <Typography component="span" variant="h5" fontWeight="bold">
        {" "}
        Question
      </Typography>
      <Typography gutterBottom sx={{ pl: 7, pt: 1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien dui,
        tempor sit amet rutrum et, dapibus nec ipsum. Nunc varius iaculis felis,
        in tristique massa tincidunt non.
      </Typography>
    </Box>
  );
};

export default Question;
