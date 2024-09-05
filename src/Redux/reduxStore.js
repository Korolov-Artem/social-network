import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let store = configureStore({
    reducer: {
      ProfilePage: profileReducer,
      DialogsPage: dialogsReducer,
      SideBar: sideBarReducer,
    },
  });
  

export default store
window.store = store 