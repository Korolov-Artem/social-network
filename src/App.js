import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import SideBarContainer from "./Components/SideBar/SideBarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginForm from "./Components/Forms/LoginForm/LoginForm";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import BetterLoader from "./Components/Common/Loader/BetterLoader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <BetterLoader/>;
        }
        return (
            <BrowserRouter>
                <div className="Container">
                    <HeaderContainer/>
                    <Navbar/>
                    <SideBarContainer/>
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/login" element={<LoginForm/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App);
