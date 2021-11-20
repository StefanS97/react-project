import { useState } from "react";
import { Card, CardActions, CardContent } from "@mui/material";
import CustomButton from "../UI/CustomButton";
import { useNavigate } from "react-router-dom";

const PostTemplate = (props) => {
  const navigate = useNavigate();
  const [toggleMore, setToggleMore] = useState(false);

  const { id, title, author, description, onRemovePost } = props;
  let newDescription = `${description.slice(0, 150)}...`;

  const toggleMoreHandler = () => {
    setToggleMore((prevToggle) => !prevToggle);
  };

  const editHandler = () => {
    const url = `/posts/edit/${id}`;
    navigate(url);
  };

  const deleteHandler = () => {
    onRemovePost(id);
  };

  return (
    <Card sx={{ width: "300px" }}>
      <CardContent>
        <h3>{title}</h3>
        <p>
          {toggleMore ? description : newDescription}
          <button onClick={toggleMoreHandler} className="toggler">
            {toggleMore ? "Read Less" : "Read More"}
          </button>
        </p>
        <address>-{author}</address>
      </CardContent>
      <CardActions>
        <CustomButton size="small" onClick={editHandler}>
          Edit
        </CustomButton>
        <CustomButton size="small" color="error" onClick={deleteHandler}>
          Delete
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default PostTemplate;
