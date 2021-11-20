import { TextField } from "@mui/material";
import CustomButton from "./CustomButton";

const CustomForm = (props) => {
  const { inputs, buttonText } = props;

  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitFormHandler} className="form">
      {inputs.map((input) => {
        return <TextField key={input.id} {...input} variant="standard" />;
      })}
      <CustomButton>{buttonText}</CustomButton>
    </form>
  );
};

export default CustomForm;
