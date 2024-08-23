const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newDialogsMessage = {
        id: 1,
        message: state.newDialogsText,
        status: state.status,
      };
      state.DialogMessagesState.push(newDialogsMessage);
      state.newDialogsText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newDialogsText = action.newMessage;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (newMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: newMessage,
});
export default dialogsReducer;