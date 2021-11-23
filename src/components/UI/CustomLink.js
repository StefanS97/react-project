import { ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const CustomLink = (props) => {
  const { url, icon, label } = props;

  return (
    <Link
      to={url}
      style={{ textDecoration: "none", color: "inherit" }}
      {...props}
    >
      <ListItem button>
        {icon && icon}
        <ListItemText
          sx={{ paddingLeft: "5px" }}
          primary={label}
          size="small"
        />
      </ListItem>
    </Link>
  );
};

export default CustomLink;
