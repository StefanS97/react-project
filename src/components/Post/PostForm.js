import CustomTitle from "../UI/CustomTitle";
import CustomForm from "../UI/CustomForm";
import useHttp from "../../hooks/use-http";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useCheckValid from "../../hooks/use-check-valid";

const inputs = [
  {
    id: "postTitle",
    label: "Post Title",
    type: "text",
    required: true,
  },
  {
    id: "postDescription",
    label: "Post Description",
    type: "text",
    multiline: true,
    required: true,
  },
];

const url =
  "https://learningreactjs-e02b9-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
const method = "POST";
const headers = { "Content-Type": "application/json" };

const PostForm = () => {
  const navigate = useNavigate();
  const [valid, setValid] = useState(true);

  const { checkValid } = useCheckValid();
  const { error, sendRequest } = useHttp();

  const publishSuccess = (dataObj) => {
    if (dataObj) {
      // memory leak here, fix asap!!
      navigate("/posts");
    }
  };

  const publishHandler = async (elementObj) => {
    const title = elementObj.postTitle.value;
    const description = elementObj.postDescription.value;
    const author = "Unknown";

    const body = {
      title,
      description,
      author,
    };

    const areValid = checkValid([title, description]);
    if (!areValid) {
      setValid(false);
      setTimeout(() => setValid(true), 3000);
      return;
    }

    sendRequest({ url, method, headers, body }, publishSuccess);
  };

  return (
    <>
      <CustomTitle title="Create Post" />
      {error && <h1 className="centered">An error has occured, try again!</h1>};
      {!error && (
        <CustomForm
          inputs={inputs}
          buttonText="Publish"
          onSubmit={publishHandler}
        />
      )}
      {!valid && (
        <p className="centered" style={{ color: "red" }}>
          Invalid inputs!
        </p>
      )}
    </>
  );
};

export default PostForm;
