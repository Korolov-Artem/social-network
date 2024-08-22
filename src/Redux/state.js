const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let store = {

    _state: {
        ProfilePage: {
            PostsState: [
                {id: 1, message: "Hello World!", likesCount: 11},
                {id: 2, message: "Hi Pal.", likesCount: 146},
            ],
            newPostText: "",
        },
        DialogsPage: {
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
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt."
                },
            ],
            newDialogsText: "",
            status: "",
        },
        SideBar: {
            SideBarFriends: [
                {
                    name: "Prusha", ava: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
                    status: "Recently Active"
                },
                {
                    name: "Fi253", ava: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
                    status: "Recently Active"
                },
                {
                    name: "Joshua", ava: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
                    status: "Recently Active"
                },
                {
                    name: "Chris", ava: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
                    status: "Recently Active"
                },
                {
                    name: "Teytig", ava: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
                    status: "Recently Active"
                },
                {
                    name: "Kolomoetz", ava: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
                    status: "Recently Active"
                },

            ]
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    
    _callSubscriber () {

    },

    getState() {
        return this._state
    },

    dispatch(action) {
        if(action.type === "ADD-POST") {
                let newPost = {
                    id: 5,
                    message: this._state.ProfilePage.newPostText,
                    likesCount: 0
                }
                this._state.ProfilePage.PostsState.push(newPost)
                this._state.ProfilePage.newPostText = ""
                this._callSubscriber(this._state)
        } else if(action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.ProfilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if(action.type === "ADD-MESSAGE") {
            let newDialogsMessage = {
                id: 5,
                message: this._state.DialogsPage.newDialogsText,
                status: this._state.DialogsPage.status
            }
            this._state.DialogsPage.DialogMessagesState.push(newDialogsMessage)
            this._state.DialogsPage.newDialogsText = ""
            this._callSubscriber(this._state)
        } else if(action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.DialogsPage.newDialogsText = action.newMessage
            this._callSubscriber(this._state)
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: newText})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (newMessage) => 
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage})

export default store
window.store = store