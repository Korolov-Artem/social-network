import React from "react";
import './Profile.css'
import ProfileData from "./ProfileData/ProfileData";
import NewPost from "../NewPost/NewPost";
import MyPosts from "../MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className="Profile">
            <ProfileData/>
            <NewPost addPost={props.addPost} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText}/>
            <MyPosts state={props.state}/>
        </div>
    )
}

export default Profile