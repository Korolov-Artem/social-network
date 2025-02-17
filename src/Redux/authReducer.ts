import { authAPI, securityAPI } from "../api/api";
import { ToggleIsFetschingType } from "./Types/Types";

const SET_USER_DATA = "auth/SET-USER-DATA";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const GET_CAPTCHA_URL = "auth/GET-CAPTCHA-URL";


let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null as string | null, // if null, then captcha is not required
};
export type InitialStateType = typeof initialState


const authReducer = (state = initialState, action): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        id: "asasdsa",
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
      };
    default:
      return state;
  }
};

type SetUserDataSuccessActionPayloadType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
type SetUserDataSuccessActionType = {
  type: typeof SET_USER_DATA;
  payload: SetUserDataSuccessActionPayloadType;
};
export const setUserDataSuccess = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetUserDataSuccessActionType => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});


export const toggleIsFetching = (isFetching):ToggleIsFetschingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});

type GetCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL;
  captchaUrl: string;
};
export const getCaptchaUrlSuccess = (captchaUrl): GetCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL,
  captchaUrl: captchaUrl,
});

export const setUserData = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let user = await authAPI.setMe();
    let { id, email, login } = user.data;
    if (user.resultCode === 0) {
      dispatch(setUserDataSuccess(id, email, login, true));
    }
    dispatch(toggleIsFetching(false));
  };
};
export const login = (
  email: string,
  password: string,
  remember: boolean,
  captcha: string,
  setStatus
) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let user = await authAPI
      .login(email, password, remember, captcha);
    if (user.resultCode === 0) {
      dispatch(setUserData());
    } else {
      if (user.resultCode === 10) {
        dispatch(getCaptcha());
        setStatus({
          errors:
            "You exceeded the number of tries. Please enter captcha to try again",
        });
      }
      setStatus({ errors: user.messages || "Some Error" });
    }
    dispatch(toggleIsFetching(false));
  };
};
export const logout = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let user = await authAPI.logout();
    if (user.data.resultCode === 0) {
      dispatch(setUserDataSuccess(null, null, null, false));
    }
    dispatch(toggleIsFetching(false));
  };
};
export const getCaptcha = () => {
  return async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
  };
};

export default authReducer;
