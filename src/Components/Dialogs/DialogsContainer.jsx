import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  addMessage,
  updateNewMessageText,
} from "../../Redux/dialogsReducer";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    state: state.DialogsPage,
  };
};

export default compose(
    connect(mapStateToProps, {
      addMessage,
      updateNewMessageText,
    }),
    withAuthRedirect,
)(Dialogs)