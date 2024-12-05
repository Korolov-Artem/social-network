const ADD_MESSAGE = "dialogs/ADD-MESSAGE";

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
        default:
            return state;
    }
};

export const addMessage = (newDialogsText) => ({
    type: ADD_MESSAGE, newDialogsText: newDialogsText
});

export default dialogsReducer;
