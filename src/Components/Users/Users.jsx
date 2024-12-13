import React from "react";
import User from "./User/User";
import "./Users.css";
import Paginator from "../Common/Paginator/Paginator";

const Users = (props) => {
    let UsersElements = props.state.map((user) => (
        <User
            key={user.id}
            onUserFollow={props.followUser}
            onUserUnfollow={props.unfollowUser}
            state={user}
            followingInProgressUserArray={props.followingInProgressUserArray}
        />
    ));

    let pagesArray = Paginator(props.totalUsersCount, props.pageSize, props.currentPage)

    return (
        <div className="Users">
            <div className="Users__pages">
                {pagesArray.map((page) => {
                    return (
                        <button
                            className={
                                props.currentPage === page
                                    ? "Users__pages__currentPageButton"
                                    : "Users__pages__pageButton"
                            }
                            onClick={() => {
                                props.onPageChange(page);
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
};

export default Users;
