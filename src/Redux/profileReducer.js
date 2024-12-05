import {profileAPI} from "../api/api";

const ADD_POST = "profile/ADD-POST";
const TOGGLE_IS_FETCHING = "profile/TOGGLE-IS-FETCHING";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_PROFILE_STATUS = "profile/SET_PROFILE_STATUS";

let initialState = {
    PostsState: [
        {id: 1, message: "Hello World!", likesCount: 11},
        {id: 2, message: "Hi Pal.", likesCount: 146},
    ],
    newPostText: "",
    isFetching: false,
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 1,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                PostsState: [...state.PostsState, newPost],
                newPostText: "",
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_PROFILE_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({
    type: ADD_POST, newPostText: newPostText
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
});
export const setUserProfileSuccess = (profile) => ({
    type: SET_USER_PROFILE,
    profile: profile,
});
export const setProfileStatusSuccess = (status) => ({
    type: SET_PROFILE_STATUS,
    status: status,
})

export const setUserProfile = (userId) => {
    return async (dispatch) => {
        let profile = await profileAPI.getProfile(userId)
        dispatch(setUserProfileSuccess(profile))
    }
}
export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setProfileStatusSuccess(response.data))
    }
}
export const setProfileStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.setStatus(status)
        if (response.resultCode === 0) {
            dispatch(setProfileStatusSuccess(status))
        }
    }
}

export default profileReducer;
