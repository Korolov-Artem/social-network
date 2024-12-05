import React from "react";
import "./User.css";
import defaultImage from "../../../Assets/Images/User.png";
import {NavLink} from "react-router-dom";

const User = ({state, followingInProgressUserArray, onUserUnfollow, onUserFollow}) => {
    return (
        <div className="UsersPage__users__user">
            <NavLink to={"/profile/" + state.id}>
                <h2>{state.name}</h2>
                <img
                    src={
                        state.photos.small != null
                            ? state.photos.small
                            : defaultImage
                    }
                    alt={
                        state.photos.small != null
                            ? state.photos.small
                            : defaultImage
                    }
                />
                <h3>{state.status}</h3>
                <div></div>
            </NavLink>
            <button
                disabled={followingInProgressUserArray
                    .some(id => id === state.id)}
                className="User__followButton"
                onClick={() =>
                    state.followed
                        ? onUserUnfollow(state.id)
                        : onUserFollow(state.id)
                }
            >
                {state.followed ? "Unfollow" : "Follow"}
            </button>
        </div>
    );
};

export default User;
