import { TextField } from "@mui/material";
import CustomButton from "./CustomButton";

const CustomForm = (props) => {
  const { inputs, buttonText } = props;

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (props.onPublish) {
      const title = event.target.elements.postTitle.value;
      const description = event.target.elements.postDescription.value;
      props.onPublish(title, description);
    }

    if (props.onEngage) {
      const firstName = event.target.elements.firstName.value;
      const lastName = event.target.elements.lastName.value;
      const email = event.target.elements.email.value;
      const message = event.target.elements.message.value;
      props.onEngage(firstName, lastName, email, message);
    }
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
