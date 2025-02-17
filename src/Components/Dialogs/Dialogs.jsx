import React from "react";
import "./Dialogs.css";
import Chats from "./Chats/Chats";
import DialogMessages from "./DialogMessages/DialogMessages";
import AddMessage from "./DialogMessages/AddMessage/AddMessage";

const Dialogs = (props) => {
  return (
    <div className="Dialogs__container">
      <Chats chats={props.state.DialogChatsState} />
      <DialogMessages dialogMessages={props.state.DialogMessagesState} />
      <AddMessage
        addMessage={props.addMessage}
        updateNewMessageText={props.updateNewMessageText}
        newDialogsText={props.state.newDialogsText}
      />
    </div>
  );
};

export default Dialogs;
