import { useRef } from "react";
import { TextField } from "@mui/material";
import CustomButton from "./CustomButton";

const CustomForm = (props) => {
  const { inputs, buttonText } = props;
  const formRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const myObj = formRef.current.elements;
    props.onSubmit(myObj);
  };

  return (
    <form ref={formRef} onSubmit={submitFormHandler} className="form">
      {inputs.map((input) => {
        return <TextField key={input.id} {...input} variant="standard" />;
      })}
      <CustomButton>{buttonText}</CustomButton>
    </form>
  );
};

export default CustomForm;
