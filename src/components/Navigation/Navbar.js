import { AppBar, IconButton, List, Toolbar } from "@mui/material";
import { amber } from "@mui/material/colors";
import { Menu, MoreVert } from "@mui/icons-material";
import { navbarLinks } from "./links";
import CustomLink from "../UI/CustomLink";

const Navbar = ({ openDrawer, handleClick }) => {
  const menuHandler = () => {
    openDrawer();
  };

  const clickHandler = (event) => {
    handleClick(event);
  };

  return (
    <AppBar position="static" color="secondary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton onClick={menuHandler}>
          <Menu sx={{ color: amber[50] }} />
        </IconButton>
        <List sx={{ display: "flex" }}>
          {navbarLinks.map((link, index) => {
            return <CustomLink key={index} {...link} />;
          })}
          <IconButton onClick={clickHandler}>
            <MoreVert sx={{ color: amber[50] }} />
          </IconButton>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
