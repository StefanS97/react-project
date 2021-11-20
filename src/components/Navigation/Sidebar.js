import { SwipeableDrawer, List } from "@mui/material";
import { Box } from "@mui/system";
import CustomLink from "../UI/CustomLink";
import { sidebarLinks } from "./links";

const Sidebar = ({ drawerState, closeDrawer }) => {
  return (
    <SwipeableDrawer
      open={drawerState}
      onClose={closeDrawer}
      onOpen={closeDrawer}
    >
      <Box sx={{ width: 250 }} onClick={closeDrawer}>
        <List>
          {sidebarLinks.map((link, index) => {
            return <CustomLink key={index} {...link} />;
          })}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default Sidebar;
