import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/dialogsReducer";

let mapStateToProps = (state) => {
  return {
    state: state.DialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },

    updateNewMessageText: (newMessage) => {
      dispatch(updateNewMessageTextActionCreator(newMessage));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer