import React from "react";
import {connect} from "react-redux";
import {
    getUsers,
    followUser,
    unfollowUser,
} from "../../Redux/usersReducer";
import Users from "./Users";
import "./Users.css";
import BetterLoader from "../Common/Loader/BetterLoader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onUserFollow = (id) => {
        this.props.followUser(id)
    };

    onUserUnfollow = (id) => {
        this.props.unfollowUser(id)
    };

    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <div className="Users__loader">
                        <BetterLoader/>
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
        followingInProgress: state.UsersPage.followingInProgress,
        followingInProgressUserArray: state.UsersPage.followingInProgressUserArray
    };
};

const UsersContainer = connect(mapStateToProps, {
    getUsers,
    followUser,
    unfollowUser,
})(UsersAPIComponent);

export default UsersContainer;
