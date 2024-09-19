import React from "react";
import "./Users.css";
import User from "./User/User";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((users) => {
        this.props.setUsers(users.data.items);
        this.props.setUsersCount(users.data.totalCount);
      });
  }

  onPageChange = (page) => {
    this.props.setPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((users) => {
        this.props.setUsers(users.data.items);
      });
  };

  render() {
    let UsersElements = this.props.state.map((user) => (
      <User
        key={user.id}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        state={user}
      />
    ));

    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    let currentP = this.props.currentPage;
    let currentPLeft 
    let currentPRight 

    if (currentP <= 5) {
      currentPLeft = 0;
      currentPRight = 9;
    } else {
      currentPLeft = currentP - 5;
      currentPRight = currentP + 4;
    }

    let pagesArray = pages.slice(currentPLeft, currentPRight);

    return (
      <div className="Users">
        <div className="Users__pages">
          {pagesArray.map((page) => {
            return (
              <button
                className={
                  this.props.currentPage === page
                    ? "Users__pages__currentPageButton"
                    : "Users__pages__pageButton"
                }
                onClick={() => {
                  this.onPageChange(page);
                }}
              >
                {page}
              </button>
            );
          })}
        </div>
        <div className="Users__UsersPage__usersElements">{UsersElements}</div>
      </div>
    );
  }
}

export default Users;
