import Profile from "./Profile";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../Redux/profileReducer";

let mapStateToProps = (state) => {
  return {
    state: state.ProfilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (newText) => {
      dispatch(updateNewPostTextActionCreator(newText));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfileContainer