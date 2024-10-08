import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setPage,
  setUsers,
  setUsersCount,
  toggleIsFetching,
  unfollow,
} from "../../Redux/usersReducer";
import Users from "./Users";
import "./Users.css";
import BetterLoader from "../Common/Loader/BetterLoader";
import { usersAPI } from "../../api/api";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((users) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(users.items);
      this.props.setUsersCount(users.totalCount);
    });
  }

  onUserFollow = (id) => {
    usersAPI.followUser(id).then((user) => {
      if (user.resultCode === 0) {
        this.props.follow(id);
      }
    });
  };

  onUserUnfollow = (id) => {
    usersAPI.unfollowUser(id).then((user) => {
      if (user.resultCode === 0) {
        this.props.unfollow(id);
      }
    });
  };

  onPageChange = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setPage(page);

    usersAPI.getUsers(page, this.props.pageSize).then((users) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(users.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <div className="Users__loader">
            <BetterLoader />
          </div>
        ) : null}
        <Users
          {...this.props}
          onPageChange={this.onPageChange}
          onUserUnfollow={this.onUserUnfollow}
          onUserFollow={this.onUserFollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    state: state.UsersPage.UsersState,
    pageSize: state.UsersPage.pageSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setPage,
  setUsersCount,
  toggleIsFetching,
})(UsersAPIComponent);

export default UsersContainer;
