import React from "react";
import './Friend.css'

const Friend = (props) => {
    return (
        <div className="SideBar__SideBarFriends__Friend">
            <div className="SideBar__SideBarFriends__Friend_name">
                <h4>{props.name}</h4>
            </div>
            <div className="SideBar__SideBarFriends__Friend_ava">
                <img src={props.ava} alt={props.ava}/>
            </div>
            <div className="SideBar__SideBarFriends__Friend_status">
                <p>{props.status}</p>
            </div>
        </div>
    )
}

export default Friend