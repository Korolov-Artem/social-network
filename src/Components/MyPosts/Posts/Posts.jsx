import React from "react";
import "./Posts.css"
import Post from "./Post/Post";


const Posts = (props) => {
    let PostsElements = props.posts
        .map(props => <Post message={props.message}
                           likesCount={props.likesCount}
                           key={props.id}/>)

    return (
        <div className="Profile__posts">
          {PostsElements}
        </div>
    );
};

export default Posts;
