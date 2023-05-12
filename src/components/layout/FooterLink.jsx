import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const FooterLink = ({ title, page }) => {
  return (
    <Link
      component={RouterLink}
      to={page}
      color="#fff"
      sx={{ textDecoration: "none" }}
      gutterBottom
    >
      {title}
    </Link>
  );
};

export default FooterLink;
