import React from "react";
import "./User.css";
import defaultImage from "../../../Assets/Images/User.png";
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className="UsersPage__users__user">
            <NavLink to={"/profile/" + props.state.id}>
                <h2>{props.state.name}</h2>
                <img
                    src={
                        props.state.photos.small != null
                            ? props.state.photos.small
                            : defaultImage
                    }
                    alt={
                        props.state.photos.small != null
                            ? props.state.photos.small
                            : defaultImage
                    }
                />
                <h3>{props.state.status}</h3>
                <div></div>
            </NavLink>
            <button
                disabled={props.followingInProgressUserArray
                    .some(id => id === props.state.id)}
                className="User__followButton"
                onClick={() =>
                    props.state.followed
                        ? props.onUserUnfollow(props.state.id)
                        : props.onUserFollow(props.state.id)
                }
            >
                {props.state.followed ? "Unfollow" : "Follow"}
            </button>
        </div>
    );
};

export default User;
