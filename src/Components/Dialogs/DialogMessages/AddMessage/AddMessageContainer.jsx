import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../Redux/dialogsReducer";
import AddMessage from "./AddMessage";

const AddMessageContainer = (props) => {
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let updateNewMessageText = (newMessage) => {
    props.dispatch(updateNewMessageTextActionCreator(newMessage));
  };

  return (
    <AddMessage
      addMessage={addMessage}
      updateNewMessageText={updateNewMessageText}
      newDialogsText={props.newDialogsText}
    />
  );
};

export default AddMessageContainer;
