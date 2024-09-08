import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import SideBarContainer from "./Components/SideBar/SideBarContainer";
import Users from "./Components/Users/Users";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="Container">
        <Header />
        <Navbar />
        <SideBarContainer />
        <Routes>
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users/*" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
