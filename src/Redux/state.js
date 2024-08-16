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
    
    getState() {
        return this._state
    },
    
    _callSubscriber () {

    },

    addPost () {
        let newPost = {
            id: 5,
            message: this._state.ProfilePage.newPostText,
            likesCount: 0
        }
        this._state.ProfilePage.PostsState.push(newPost)
        this._state.ProfilePage.newPostText = ""
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.ProfilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

}
export default store
window.store = store