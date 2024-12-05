import React from "react";
import {connect} from "react-redux";
import {followUser, getUsers, unfollowUser,} from "../../Redux/usersReducer";
import Users from "./Users";
import "./Users.css";
import BetterLoader from "../Common/Loader/BetterLoader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getFollowingInProgressUserArray,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersState
} from "../../Redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

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
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        followingInProgressUserArray: getFollowingInProgressUserArray(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        getUsers,
        followUser,
        unfollowUser,
    })
)(UsersContainer);
