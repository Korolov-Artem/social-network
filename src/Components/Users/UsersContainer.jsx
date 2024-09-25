import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setPageAC,
  setUsersAC,
  setUsersCountAC,
  toggleIsFetching,
  unfollowAC,
} from "../../Redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import "./Users.css";
import Loader from "../Common/Loader/Loader";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((users) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(users.data.items);
        this.props.setUsersCount(users.data.totalCount);
      });
  }

  onPageChange = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setPage(page);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((users) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(users.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <div className="Users__loader">
            <Loader className="Users__loader__loaderImg"/>
          </div>
        ) : (
          <Users {...this.props} onPageChange={this.onPageChange} />
        )}
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

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followAC(id));
    },
    unfollow: (id) => {
      dispatch(unfollowAC(id));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setPage: (currentPage) => {
      dispatch(setPageAC(currentPage));
    },
    setUsersCount: (totalUsersCount) => {
      dispatch(setUsersCountAC(totalUsersCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetching(isFetching));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;
