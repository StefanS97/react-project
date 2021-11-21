import { useState, useEffect } from "react";
import CustomTitle from "../UI/CustomTitle";
import PostTemplate from "./PostTemplate";
import useHttp from "../../hooks/use-http";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const url =
    "https://learningreactjs-e02b9-default-rtdb.europe-west1.firebasedatabase.app/posts.json";

  const { loading, error, sendRequest: fetchPosts } = useHttp();

  useEffect(() => {
    const setFetchedPosts = (dataArr) => {
      setPosts(dataArr);
    };

    fetchPosts({ url }, setFetchedPosts);
  }, [fetchPosts]);

  const removePost = (id) => {
    // do a backend call for removing an item
    let updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <>
      <CustomTitle title="Posts" />
      {loading && <h1 className="centered">Loading... Please be patient!</h1>}
      {error && <h1 className="centered">An Error has occured!</h1>}
      {posts.length < 1 && !loading && (
        <h1 className="centered">There are no posts at this moment...</h1>
      )}
      {posts.length > 0 && (
        <section className="centered postlist">
          {posts.map((post) => (
            <PostTemplate key={post.id} {...post} onRemovePost={removePost} />
          ))}
        </section>
      )}
    </>
  );
};

export default PostList;
