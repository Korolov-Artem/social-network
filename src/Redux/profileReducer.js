import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  PostsState: [
    { id: 1, message: "Hello World!", likesCount: 11 },
    { id: 2, message: "Hi Pal.", likesCount: 146 },
  ],
  newPostText: "",
  isFetching: false,
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 1,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        PostsState: [...state.PostsState, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});
export const setUserProfileSuccess = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});
export const setUserProfile = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.getProfile(userId)
        .then((profile) => {
          dispatch(setUserProfileSuccess(profile))
          dispatch(toggleIsFetching(false))
        });
  }
}

export default profileReducer;
