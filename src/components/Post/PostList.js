import { useState, useEffect } from "react";
import CustomTitle from "../UI/CustomTitle";
import PostTemplate from "./PostTemplate";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url =
    "https://learningreactjs-e02b9-default-rtdb.europe-west1.firebasedatabase.app/posts.json";

  const fetchPosts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
      {posts.length < 1 && (
        <h1 className="centered">There are no posts at this moment...</h1>
      )}
      <section className="centered postlist">
        {posts.map((post) => (
          <PostTemplate key={post.id} {...post} onRemovePost={removePost} />
        ))}
      </section>
    </>
  );
};

export default PostList;
