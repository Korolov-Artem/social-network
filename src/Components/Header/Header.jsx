import React from "react";
import "./Header.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="Header">
            <div>
                {!props.isAuth ? (
                    <NavLink to="/login" className="Header__login__button">
                        Login
                    </NavLink>
                ) : (
                    <div>
                        <h2 className="Header__login">{props.login}</h2>
                        <button onClick={props.logout}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
