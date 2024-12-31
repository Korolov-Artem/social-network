import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = "auth/SET-USER-DATA";
const TOGGLE_IS_FETCHING = "auth/TOGGLE-IS-FETCHING";
const GET_CAPTCHA_URL = "auth/GET-CAPTCHA-URL";

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null,
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
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
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
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL,
    captchaUrl: captchaUrl,
})

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
            formValues.email, formValues.password, formValues.remember, formValues.captcha)
        if (user.resultCode === 0) {
            dispatch(setUserData())
        } else {
            if (user.resultCode === 10) {
                dispatch(getCaptcha())
                setStatus({errors: "You exceeded the number of tries. Please enter captcha to try again"})
            }
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
export const getCaptcha = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }
}

export default authReducer;
