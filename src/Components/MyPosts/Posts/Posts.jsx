import React from "react";
import "./Posts.css";
import Post from "./Post/Post";

const Posts = (props) => {
  let PostsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  return <div className="Profile__posts">{PostsElements}</div>;
};

export default Posts;
