import React from "react";
import {NavLink} from "react-router-dom";
import './Chat.css'

const Chat = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className="Dialogs__chats_contactName">{props.name}</NavLink>
    )
}

export default Chat