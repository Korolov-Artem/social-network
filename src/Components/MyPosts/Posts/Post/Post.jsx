import React from "react";
import "./Post.css"

const Post = (props) => {
    return (
        <div className="Profile__posts__post">
            {props.message}
            {props.likesCount}
        </div>
    )
}

export default Post