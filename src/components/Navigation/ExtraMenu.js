import { Menu } from "@mui/material";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import CustomLink from "../UI/CustomLink";

const ExtraMenu = ({ anchorEl, handleClose }) => {
  const authCtx = useContext(AuthContext);
  const open = anchorEl ? true : false;

  const closeHandler = () => {
    handleClose();
    authCtx.isLoggedIn && authCtx.logout();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={handleClose}
    >
      {!authCtx.isLoggedIn ? (
        <CustomLink url="/auth" label="Authenticate" onClick={closeHandler} />
      ) : (
        <CustomLink url="/" label="Logout" onClick={closeHandler} />
      )}
    </Menu>
  );
};

export default ExtraMenu;
