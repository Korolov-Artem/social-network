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
                ...action.payload
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

export const setUserDataSuccess = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
});
export const setUserData = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.setMe().then((user) => {
            let {id, email, login} = user.data;
            if (user.resultCode === 0) {
                dispatch(setUserDataSuccess(id, email, login, true))
            }
            dispatch(toggleIsFetching(false))
        });
    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.login(email, password, rememberMe).then((user) => {
            if (user.resultCode === 0) {
                dispatch(setUserData())
            }
            dispatch(toggleIsFetching(false))
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.logout().then((user) => {
            if (user.data.resultCode === 0) {
                dispatch(setUserDataSuccess(null, null, null, false))
            }
            dispatch(toggleIsFetching(false))
        })
    }
}

export default authReducer;
