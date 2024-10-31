import React from "react";
import AddMessageForm from "../../../Forms/AddMessageForm/AddMessageForm";

const AddMessage = (props) => {
    return (
        <AddMessageForm addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>
    )
}

export default AddMessage