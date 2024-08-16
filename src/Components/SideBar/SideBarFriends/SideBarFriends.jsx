import React from "react";
import './SideBarFriends.css'
import Friend from "./Friend/Friend";

const SideBarFriends = (props) => {
    
    let Friends = props.SideBarFriends
        .map(data => <Friend name={data.name} ava={data.ava} status={data.status}/>)
    
    return (
        <div className="SideBarFriends">
            {Friends}
        </div>
    )
}

export default SideBarFriends