import React from "react";
import "./Users.css";
import User from "./User/User";

const Users = (props) => {
  let UsersElements = props.state.map((user) => (
    <User
      key={user.id}
      follow={props.follow}
      unfollow={props.unfollow}
      state={user}
    />
  ));

  return (
    <div className="Users">
      <div className="UsersPage__users">{UsersElements}</div>
    </div>
  );
};

export default Users;
