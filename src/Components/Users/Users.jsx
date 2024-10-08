import React from "react";
import User from "./User/User";
import "./Users.css";

const Users = (props) => {
  let UsersElements = props.state.map((user) => (
    <User
      key={user.id}
      onUserFollow={props.onUserFollow}
      onUserUnfollow={props.onUserUnfollow}
      state={user}
    />
  ));

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let currentP = props.currentPage;
  let currentPLeft;
  let currentPRight;

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
