import React from "react";
import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
const App = (props) => {
    return (
        <BrowserRouter>
            <div className="Container">
                <Header/>
                <Navbar/>
                <SideBar state={props.state.SideBar}/>
                <Routes>
                    <Route path="/profile" element={<Profile
                        dispatch={props.dispatch}
                        state={props.state.ProfilePage}
                        />}/>
                    <Route path="/dialogs/*" 
                    element={<Dialogs state={props.state.DialogsPage}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;