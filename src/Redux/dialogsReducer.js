const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    DialogChatsState: [
        {id: 1, name: "Prusha"},
        {id: 2, name: "Joshua"},
        {id: 3, name: "Freylin"},
        {id: 4, name: "Kuba1965"},
    ],
    DialogMessagesState: [
        {id: 1, message: "Excepteur sint occaecat cupidatat!"},
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
        // case UPDATE_NEW_MESSAGE_TEXT: {
        //     return {...state, newDialogsText: action.newMessage};
        // }
        default:
            return state;
    }
};

export const addMessage = (newDialogsText) => ({
    type: ADD_MESSAGE, newDialogsText: newDialogsText
});
// export const updateNewMessageText = (newMessage) => ({
//     type: UPDATE_NEW_MESSAGE_TEXT,
//     newMessage: newMessage,
// });

export default dialogsReducer;
