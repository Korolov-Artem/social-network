import React from "react";
import "./Users.css";
import User from "./User/User";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((users) => {
        this.props.setUsers(users.data.items);
      });
  }

  render() {
    let UsersElements = this.props.state.map((user) => (
      <User
        key={user.id}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        state={user}
      />
    ));

    return (
      <div className="Users">
        <div className="UsersPage__users">{UsersElements}</div>
      </div>
    );
  }
}

export default Users;
