const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  PostsState: [
    { id: 1, message: "Hello World!", likesCount: 11 },
    { id: 2, message: "Hi Pal.", likesCount: 146 }, 
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  // let newState = structuredClone(state);

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
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
});
export default profileReducer;
