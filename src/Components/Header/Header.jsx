import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="Header">
      <div>
        {!props.state.isAuth ? (
          <NavLink to="/login" className="Header__login__button">
            Login
          </NavLink>
        ) : (
          <h2 className="Header__login">{props.state.login}</h2>
        )}
      </div>
    </header>
  );
};

export default Header;
