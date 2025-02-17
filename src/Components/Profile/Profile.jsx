import React from "react";
import "./Profile.css";
import ProfileData from "./ProfileData/ProfileData";
import MyPosts from "./MyPosts/MyPosts";
import NewPost from "../NewPost/NewPost";

const Profile = (props) => {
    return (
        <div className="Profile">
            <ProfileData
                profile={props.state.profile}
                setProfileStatus={props.setProfileStatus}
                status={props.state.status}
                isOwner={props.isOwner}
                setProfilePhoto={props.setProfilePhoto}
                updateProfileDescription={props.updateProfileDescription}
            />
            <NewPost
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
                newPostText={props.state.newPostText}
            />
            <MyPosts state={props.state.PostsState}/>
        </div>
    );
};

export default Profile;
