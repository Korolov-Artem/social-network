import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducers from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";


let store = configureStore({
    reducer: {
        ProfilePage: profileReducer,
        DialogsPage: dialogsReducer,
        SideBar: sideBarReducer,
        UsersPage: usersReducers,
        auth: authReducer,
        app: appReducer,
    },
});


export default store
window.store = store 