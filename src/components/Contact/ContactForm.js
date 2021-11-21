import CustomForm from "../UI/CustomForm";

const inputs = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "message",
    label: "Message",
    type: "text",
    multiline: true,
  },
];

const ContactForm = () => {
  const onEngage = (firstName, lastName, email, message) => {
    // send a request to backend to get the message, then render a message sent view
  };

  return <CustomForm inputs={inputs} buttonText="Engage" onEngage={onEngage} />;
};

export default ContactForm;
