import React from "react";
import './SideBar.css'
import SideBarFriends from "./SideBarFriends/SideBarFriends";

const SideBar = (props) => {
    return (
        <div className="SideBar">
            <div className="SideBar__section_friends">
                <div className="SideBar__section_friends_name">
                    <p>My Friends</p>
                </div>
                <SideBarFriends SideBarFriends={props.state.SideBarFriends}/>
            </div>
        </div>
    )
}

export default SideBar