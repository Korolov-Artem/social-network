const ADD_MESSAGE = "dialogs/ADD-MESSAGE";


type DialogType = {
    id: number
    name: string
}
type DialogMessageType = {
    id: number
    message: string
}
let initialState = {
  DialogChatsState: [
    { id: 1, name: "Prusha" },
    { id: 2, name: "Joshua" },
    { id: 3, name: "Freylin" },
    { id: 4, name: "Kuba1965" },
  ] as Array<DialogType>,
  DialogMessagesState: [
    { id: 1, message: "Excepteur sint occaecat cupidatat!" },
    {
      id: 2,
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
  ] as Array<DialogMessageType>,
  newDialogsText: "" as string,
  status: "" as string,
};
export type InitialStateType = typeof initialState;


const dialogsReducer = (state = initialState, action):InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newDialogsMessage = {
        id: 1,
        message: action.newDialogsText,
        status: state.status,
      };
      return {
        ...state,
        DialogMessagesState: [...state.DialogMessagesState, newDialogsMessage],
        newDialogsText: "",
      };
    }
    default:
      return state;
  }
};


export type addMessageActionType = {
  type: typeof ADD_MESSAGE;
  newDialogsText: string;
};
export const addMessage = (newDialogsText):addMessageActionType => ({
  type: ADD_MESSAGE,
  newDialogsText: newDialogsText,
});


export default dialogsReducer;
