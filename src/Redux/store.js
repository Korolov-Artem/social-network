import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
  _state: {
    ProfilePage: {
      PostsState: [
        { id: 1, message: "Hello World!", likesCount: 11 },
        { id: 2, message: "Hi Pal.", likesCount: 146 },
      ],
      newPostText: "",
    },
    DialogsPage: {
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
    },
    SideBar: {
      SideBarFriends: [
        {
          name: "Prusha",
          ava: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
          status: "Recently Active",
        },
        {
          name: "Fi253",
          ava: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
          status: "Recently Active",
        },
        {
          name: "Joshua",
          ava: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
          status: "Recently Active",
        },
        {
          name: "Chris",
          ava: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
          status: "Recently Active",
        },
        {
          name: "Teytig",
          ava: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
          status: "Recently Active",
        },
        {
          name: "Kolomoetz",
          ava: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
          status: "Recently Active",
        },
      ],
    },
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
    this._state.SideBar = sideBarReducer(this._state.SideBar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
