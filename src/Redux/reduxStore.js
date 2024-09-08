import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducers from "./usersReducer";

let store = configureStore({
    reducer: {
      ProfilePage: profileReducer,
      DialogsPage: dialogsReducer,
      SideBar: sideBarReducer,
      UsersPage: usersReducers, 
    },
  });
  

export default store
window.store = store 