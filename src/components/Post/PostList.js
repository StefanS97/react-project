import { useState, useEffect } from "react";
import CustomTitle from "../UI/CustomTitle";
import PostTemplate from "./PostTemplate";
import useHttp from "../../hooks/use-http";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const { loading, error, sendRequest } = useHttp();

  useEffect(() => {
    const url =
      "https://learningreactjs-e02b9-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
    const setFetchedPosts = (dataObj) => {
      const newData = [];
      for (let i in dataObj) {
        newData.push({ id: i, ...dataObj[i] });
      }
      setPosts(newData);
    };

    sendRequest({ url }, setFetchedPosts);
  }, [sendRequest]);

  const removePost = (id) => {
    const url = `https://learningreactjs-e02b9-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`;
    const method = "DELETE";
    const headers = { "Content-Type": "application/json" };
    sendRequest({ url, method, headers }, () => {});
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
