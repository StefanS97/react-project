import CustomTitle from "../UI/CustomTitle";
import CustomForm from "../UI/CustomForm";
import useHttp from "../../hooks/use-http";
import { useNavigate } from "react-router-dom";

const inputs = [
  {
    id: "postTitle",
    label: "Post Title",
    type: "text",
  },
  {
    id: "postDescription",
    label: "Post Description",
    type: "text",
    multiline: true,
  },
];

const PostForm = (props) => {
  const navigate = useNavigate();

  const { error, sendRequest } = useHttp();

  const publishSuccess = (dataArr) => {
    if (dataArr.length > 0) {
      // memory leak here, fix asap!!
      navigate("/posts");
    }
  };

  const publishHandler = async (title, description) => {
    const author = "Unknown";
    const url =
      "https://learningreactjs-e02b9-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
    const method = "POST";
    const headers = { "Content-Type": "application/json" };
    const body = {
      title,
      description,
      author,
    };

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
          onPublish={publishHandler}
        />
      )}
    </>
  );
};

export default PostForm;
