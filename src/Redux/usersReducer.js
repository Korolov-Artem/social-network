const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";
const SET_USERS_COUNT = "SET-USERS-COUNT"

let initialState = {
  UsersState: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        UsersState: state.UsersState.map((user) =>
          user.id === action.id ? { ...user, followStatus: true } : user
        ),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        UsersState: state.UsersState.map((user) =>
          user.id === action.id ? { ...user, followStatus: false } : user
        ),
      };
    }
    case SET_USERS: {
      return { ...state, UsersState: action.users };
    }
    case SET_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount}
    }
    default:
      return state;
  }
};

export const followAC = (id) => ({ type: FOLLOW, id: id });
export const unfollowAC = (id) => ({ type: UNFOLLOW, id: id });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });
export const setPageAC = (currentPage) => ({
  type: SET_PAGE,
  currentPage: currentPage,
});
export const setUsersCountAC = (totalUsersCount) => ({
  type: SET_USERS_COUNT,
  totalUsersCount: totalUsersCount,
});

export default usersReducer;
