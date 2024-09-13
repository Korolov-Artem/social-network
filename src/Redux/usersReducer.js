const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  UsersState: [],
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
      return { ...state, UsersState: [...state.UsersState, ...action.users] };
    }
    default:
      return state;
  }
};

export const followAC = (id) => ({ type: FOLLOW, id: id });
export const unfollowAC = (id) => ({ type: UNFOLLOW, id: id });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });

export default usersReducer;
