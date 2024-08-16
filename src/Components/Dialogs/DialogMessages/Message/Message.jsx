import React from "react";
import './Message.css'

const Message = (props) => {
    return (
        <p className={"Dialogs__messages_" + props.belonging}>{props.message}</p>
    )
}

export default Message