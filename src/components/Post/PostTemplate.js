import { useState, useContext } from "react";
import { Card, CardActions, CardContent } from "@mui/material";
import CustomButton from "../UI/CustomButton";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const PostTemplate = (props) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [toggleMore, setToggleMore] = useState(false);

  const { id, title, author, description, onRemovePost } = props;
  let newDescription =
    description.length > 150 ? `${description.slice(0, 150)}...` : description;

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
          {toggleMore && description.length > 150
            ? description
            : newDescription}
          {description.length > 150 && (
            <button onClick={toggleMoreHandler} className="toggler">
              {toggleMore ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
        <address>-{author}</address>
      </CardContent>
      {authCtx.isLoggedIn && (
        <CardActions>
          <CustomButton size="small" onClick={editHandler}>
            Edit
          </CustomButton>
          <CustomButton size="small" color="error" onClick={deleteHandler}>
            Delete
          </CustomButton>
        </CardActions>
      )}
    </Card>
  );
};

export default PostTemplate;
