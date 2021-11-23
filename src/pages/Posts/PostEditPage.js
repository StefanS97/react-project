import { useParams } from "react-router-dom";
import PostEdit from "../../components/Post/PostEdit";

const PostEditPage = () => {
  const params = useParams();

  return <PostEdit params={params} />;
};

export default PostEditPage;
