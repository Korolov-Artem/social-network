import React from "react";
import "./Dialogs.css";
import Chats from "./Chats/Chats";
import DialogMessages from "./DialogMessages/DialogMessages";
import AddMessageContainer from "./DialogMessages/AddMessage/AddMessageContainer";

const Dialogs = (props) => {
  return (
    <div className="Dialogs__container">
      <Chats chats={props.state.DialogChatsState} />
      <DialogMessages dialogMessages={props.state.DialogMessagesState} />
      <AddMessageContainer
        newDialogsText={props.state.newDialogsText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Dialogs;
