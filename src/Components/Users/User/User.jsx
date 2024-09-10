import React from "react";
import "./User.css";

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
      <h2>{props.state.name}</h2>
      <img src={props.state.photo} alt={props.state.photo} />
      <h3>{props.state.status}</h3>
      <div>
        <p>{props.state.location.city}</p>
        <p>{props.state.location.country}</p>
      </div>

      <button
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
