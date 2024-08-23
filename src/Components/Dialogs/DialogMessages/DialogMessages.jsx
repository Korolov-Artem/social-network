import React from "react";
import './DialogMessages.css'
import Message from "./Message/Message";

const DialogMessages = (props) => {
    
    let ownerId = 1

    const Belonging = (props) => {
        if (props === ownerId) {
            return "ownerMessage"
        } else {
            return "contactMessage"
        }
    }

    let DialogsMessageElement = props.dialogMessages
        .map(message => <Message belonging={Belonging(message.id)}
                                 message={message.message}/>)

    return (
        <div className="Dialogs__messages">
            {DialogsMessageElement}
        </div>
    )
}

export default DialogMessages