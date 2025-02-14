import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import SideBarContainer from "./Components/SideBar/SideBarContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginForm from "./Components/Forms/LoginForm/LoginForm";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./Redux/appReducer";
import BetterLoader from "./Components/Common/Loader/BetterLoader";
import { compose } from "redux";
import store from "./Redux/reduxStore";

const UsersContainer = React.lazy(() =>
  import("./Components/Users/UsersContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <BetterLoader />;
    }
    return (
      <Suspense fallback={<BetterLoader />}>
        <HashRouter>
          <div className="Container">
            <HeaderContainer />
            <Navbar />
            <SideBarContainer />
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users/*" element={<UsersContainer />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </div>
        </HashRouter>
      </Suspense>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(connect(mapStateToProps, { initializeApp })(App));

let MainApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  );
};

export default MainApp;