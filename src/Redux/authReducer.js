import {authAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const setUserDataSuccess = (id, email, login) => ({
  type: SET_USER_DATA,
  data: {id, email, login}
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});
export const setUserData = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    authAPI.setMe().then((user) => {
          let { id, email, login } = user.data;
          if (user.resultCode === 0) {
            dispatch(setUserDataSuccess(id, email, login))
          }
          dispatch(toggleIsFetching(false))
        });
  }
}

export default authReducer;
