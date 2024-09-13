import React from "react";
import "./Users.css";
import User from "./User/User";
import axios from "axios";

const Users = (props) => {
  let getUsers = () => {
    if (props.state.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((users) => {
          props.setUsers(users.data.items);
        });
    }
  };

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
      <button className="Users__getUsers" onClick={getUsers}>
        Get Users
      </button>
      <div className="UsersPage__users">{UsersElements}</div>
    </div>
  );
};

export default Users;
