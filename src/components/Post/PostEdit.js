import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import CustomTitle from "../UI/CustomTitle";
import CustomForm from "../UI/CustomForm";
import { useNavigate } from "react-router-dom";
import useCheckValid from "../../hooks/use-check-valid";

const PostEdit = (props) => {
  const navigate = useNavigate();
  const { checkValid, valid: fieldsValid } = useCheckValid();
  const [details, setDetails] = useState([]);
  const { postId } = props.params;
  const { loading, error, sendRequest } = useHttp();
  const valid = details.length > 0;
  const url = `https://learningreactjs-e02b9-default-rtdb.europe-west1.firebasedatabase.app/posts/${postId}.json`;

  useEffect(() => {
    const detailsHandler = (postObj) => {
      setDetails([postObj]);
    };

    sendRequest({ url }, detailsHandler);
  }, [sendRequest, url]);

  let inputs = [];
  if (valid) {
    inputs = [
      {
        id: "postTitle",
        label: "Post Title",
        type: "text",
        required: true,
        defaultValue: details[0].title,
      },
      {
        id: "postDescription",
        label: "Post Description",
        type: "text",
        multiline: true,
        required: true,
        defaultValue: details[0].description,
      },
    ];
  }

  const publishSuccess = (dataObj) => {
    if (dataObj) {
      // memory leak here, fix asap!!
      navigate("/posts");
    }
  };

  const updateHandler = (myObj) => {
    const newTitle = myObj.postTitle.value;
    const newDescription = myObj.postDescription.value;

    const areValid = checkValid([newTitle, newDescription]);
    if (!areValid) {
      return;
    }

    if (
      newTitle === details[0].title &&
      newDescription === details[0].description
    ) {
      navigate("/posts");
    } else {
      const method = "PUT";
      const headers = { "Content-Type": "application/json" };
      const body = {
        title: newTitle,
        description: newDescription,
        author: details[0].author,
      };

      sendRequest({ url, method, headers, body }, publishSuccess);
    }
  };

  if (error || !valid) {
    return <h1 className="centered">Not Found :(</h1>;
  }

  return (
    <>
      {loading && <h1 className="centered">Loading... please be patient!</h1>}
      <CustomTitle title="Post Details" />
      {valid && (
        <CustomForm
          inputs={inputs}
          buttonText="Update"
          onSubmit={updateHandler}
        />
      )}
      {!fieldsValid && (
        <p className="centered" style={{ color: "red" }}>
          Invalid inputs!
        </p>
      )}
    </>
  );
};

export default PostEdit;
