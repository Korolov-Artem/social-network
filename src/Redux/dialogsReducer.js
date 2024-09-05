const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  DialogChatsState: [
    { id: 1, name: "Prusha" },
    { id: 2, name: "Joshua" },
    { id: 3, name: "Freylin" },
    { id: 4, name: "Kuba1965" },
  ],
  DialogMessagesState: [
    { id: 1, message: "Excepteur sint occaecat cupidatat!" },
    {
      id: 2,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt.",
    },
  ],
  newDialogsText: "",
  status: "",
};

const dialogsReducer = (state = initialState, action) => {
  // let newState = structuredClone(state);

  switch (action.type) {
    case ADD_MESSAGE: {
      let newDialogsMessage = {
        id: 1,
        message: state.newDialogsText,
        status: state.status,
      };
      let stateCopy = { ...state };
      stateCopy.DialogMessagesState = [...stateCopy.DialogMessagesState];
      stateCopy.DialogMessagesState.push(newDialogsMessage);
      stateCopy.newDialogsText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newDialogsText = action.newMessage;
      return stateCopy;
    }
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
