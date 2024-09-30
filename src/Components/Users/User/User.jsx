import React from "react";
import "./User.css";
import defaultImage from "../../../Assets/Images/User.png";
import { NavLink } from "react-router-dom";

const User = (props) => {
  let isFollowed = () => {
    return props.state.followStatus;
  };

  const follow = (id) => {
    props.follow(id);
  };

  const unfollow = (id) => {
    props.unfollow(id);
  };

  return (
    <div className="UsersPage__users__user">
      <NavLink to={"/profile/" + props.id}>
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
        className="User__followButton"
        onClick={() =>
          isFollowed() ? unfollow(props.state.id) : follow(props.state.id)
        }
      >
        {isFollowed() ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
