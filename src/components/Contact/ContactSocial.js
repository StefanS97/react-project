import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import social from "./social";

const ContactSocial = () => {
  return (
    <div className="contact-social">
      <Box component="span" sx={{ display: "inline-block" }}>
        {social.map((item, index) => {
          return (
            <IconButton key={index} size="large">
              <a href={item.path}>{item.icon}</a>
            </IconButton>
          );
        })}
      </Box>
    </div>
  );
};

export default ContactSocial;
