import React from "react";
import "./Profile.css";
import ProfileData from "./ProfileData/ProfileData";
import MyPosts from "../MyPosts/MyPosts";
import NewPostContainer from "../NewPost/NewPostContainer";

const Profile = (props) => {
  return (
    <div className="Profile">
      <ProfileData />
      <NewPostContainer
        dispatch={props.dispatch}
        newPostText={props.state.newPostText}
      />
      <MyPosts state={props.state} />
    </div>
  );
};

export default Profile;
