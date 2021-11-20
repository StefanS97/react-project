import { Button } from "@mui/material";

const CustomButton = (props) => {
  return (
    <Button
      type="submit"
      sx={{ justifySelf: "start", marginTop: 2 }}
      variant="outlined"
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
