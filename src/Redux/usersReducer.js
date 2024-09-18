const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";

let initialState = {
  UsersState: [],
  pageSize: 10,
  totalUsersCount: 200,
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

export default usersReducer;
