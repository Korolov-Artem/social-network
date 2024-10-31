import React from "react";
import './NewPost.css'
import AddPostForm from "../Forms/AddPostForm/AddPostForm";

const NewPost = (props) => {
    return (
        <AddPostForm addPost={props.addPost} updateNewPostText={props.updateNewPostText}
                     newPostText={props.newPostText}/>
    )
}

export default NewPost