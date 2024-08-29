import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../Redux/profileReducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {
  let updateNewPostText = (newText) => {
    props.dispatch(updateNewPostTextActionCreator(newText));
  };

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <NewPost
      updateNewPostText={updateNewPostText}
      addPost={addPost}
      newPostText={props.newPostText}
    />

  );
};

export default NewPostContainer;
