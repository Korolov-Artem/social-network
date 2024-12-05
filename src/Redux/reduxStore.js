import {applyMiddleware, combineReducers, createStore} from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducers from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import {compose} from "redux";
import {thunk} from "redux-thunk";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    SideBar: sideBarReducer,
    UsersPage: usersReducers,
    auth: authReducer,
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// let store = configureStore({
//     reducer: {
//         ProfilePage: profileReducer,
//         DialogsPage: dialogsReducer,
//         SideBar: sideBarReducer,
//         UsersPage: usersReducers,
//         auth: authReducer,
//         app: appReducer,
//     },
// });


export default store
window.store = store 