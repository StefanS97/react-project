import CustomForm from "../UI/CustomForm";

const ContactForm = () => {
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

  const buttonText = "Engage";

  return <CustomForm inputs={inputs} buttonText={buttonText} />;
};

export default ContactForm;
