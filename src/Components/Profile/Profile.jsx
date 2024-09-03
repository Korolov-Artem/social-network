import React from "react";
import "./Profile.css";
import ProfileData from "./ProfileData/ProfileData";
import MyPosts from "../MyPosts/MyPosts";
import NewPost from "../NewPost/NewPost";

const Profile = (props) => {
  return (
    <div className="Profile">
      <ProfileData />
      <NewPost
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
        newPostText={props.state.newPostText}
      />
      <MyPosts state={props.state} />
    </div>
  );
};

export default Profile;
