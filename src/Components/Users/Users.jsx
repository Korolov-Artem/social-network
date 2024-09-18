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

    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    let currentP = this.props.currentPage;
    let currentPLeft = currentP - 8 < 1 ? 0 : currentP - 8;
    let currentPRight = currentP + 8;
    let slicedPages = pages.slice(currentPLeft, currentPRight);

    return (
      <div className="Users">
        <div className="Users__pages">
          {slicedPages.map((page) => {
            return (
              <button
                className={
                  this.props.currentPage === page
                    ? "Users__pages__currentPageButton"
                    : "Users__pages__pageButton"
                }
                onClick={() => {this.props.setPage(page)}}
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
