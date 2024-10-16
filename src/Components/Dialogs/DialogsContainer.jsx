import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  addMessage,
  updateNewMessageText,
} from "../../Redux/dialogsReducer";

let mapStateToProps = (state) => {
  return {
    state: state.DialogsPage,
    isAuth: state.auth.isAuth,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  addMessage,
  updateNewMessageText,
})(Dialogs);

export default DialogsContainer