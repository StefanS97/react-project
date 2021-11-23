import { useState } from "react";
import CustomForm from "../UI/CustomForm";
import useCheckValid from "../../hooks/use-check-valid";
import useHttp from "../../hooks/use-http";
import InvalidInput from "../UI/InvalidInput";
import Error from "../UI/Error";

const inputs = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    id: "message",
    label: "Message",
    type: "text",
    multiline: true,
    required: true,
  },
];

const url =
  "https://learningreactjs-e02b9-default-rtdb.europe-west1.firebasedatabase.app/siteMessages.json";
const method = "POST";
const headers = { "Content-Type": "application/json" };

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const { checkValid, valid } = useCheckValid();
  const { error, sendRequest } = useHttp();

  const onEngage = (myObj) => {
    const firstName = myObj.firstName.value;
    const lastName = myObj.lastName.value;
    const email = myObj.email.value;
    const message = myObj.message.value;

    const body = {
      firstName,
      lastName,
      email,
      message,
    };

    const areValid = checkValid([firstName, lastName, email, message]);
    if (!areValid) {
      return;
    }

    sendRequest({ url, method, headers, body }, () => {});
    setSubmitted(true);
  };

  if (error) {
    return <Error />;
  }

  if (submitted) {
    return <h1 className="centered">Thank you! We'll get to you shortly!</h1>;
  } else {
    if (!valid) {
      return <InvalidInput />;
    }

    return (
      <CustomForm inputs={inputs} buttonText="Engage" onSubmit={onEngage} />
    );
  }
};

export default ContactForm;
