import React from "react";
import './Chats.css'
import Chat from "./Chat/Chat";

const Chats = (props) => {
    
    
    let DialogsChatElement = props.chats
        .map(dialog => <Chat id={dialog.id} name={dialog.name}/>)
    return (
        <div className="Dialogs__chats">
            {DialogsChatElement}
        </div>
    )
}

export default Chats