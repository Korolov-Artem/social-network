import React from "react";
import './Profile.css'
import ProfileData from "./ProfileData/ProfileData";
import NewPost from "../NewPost/NewPost";
import MyPosts from "../MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className="Profile">
            <ProfileData/>
            <NewPost dispatch={props.dispatch} newPostText={props.state.newPostText}/>
            <MyPosts state={props.state}/>
        </div>
    )
}

export default Profile