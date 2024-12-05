import {authAPI} from "../api/api";

const SET_USER_DATA = "auth/SET-USER-DATA";
const TOGGLE_IS_FETCHING = "auth/TOGGLE-IS-FETCHING";

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
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let user = await authAPI.setMe()
        let {id, email, login} = user.data;
        if (user.resultCode === 0) {
            dispatch(setUserDataSuccess(id, email, login, true))
        }
        dispatch(toggleIsFetching(false))
    }
}
export const login = (formValues, setStatus) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let user = await authAPI.login(
            formValues.email, formValues.password, formValues.remember)
        if (user.resultCode === 0) {
            dispatch(setUserData())
        } else {
            setStatus({errors: user.messages || "Some Error"})
        }
        dispatch(toggleIsFetching(false))
    }
}
export const logout = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let user = await authAPI.logout()
        if (user.data.resultCode === 0) {
            dispatch(setUserDataSuccess(null, null, null, false))
        }
        dispatch(toggleIsFetching(false))
    }
}

export default authReducer;
