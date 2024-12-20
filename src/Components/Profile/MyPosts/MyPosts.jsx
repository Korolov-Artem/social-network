import React from "react";
import "./MyPosts.css";
import Posts from "./Posts/Posts";

const MyPosts = React.memo(props => {
    return (
        <div className="Profile__myPosts">
            <div className="Profile__myPosts__sectionTag">My Posts</div>
            <Posts posts={props.state}/>
        </div>
    );
});

export default MyPosts;
