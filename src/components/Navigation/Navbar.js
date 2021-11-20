import { AppBar, IconButton, List, Toolbar } from "@mui/material";
import { amber } from "@mui/material/colors";
import { Menu } from "@mui/icons-material";
import { navbarLinks } from "./links";
import CustomLink from "../UI/CustomLink";

const Navbar = ({ openDrawer }) => {
  const menuHandler = () => {
    openDrawer();
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
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
