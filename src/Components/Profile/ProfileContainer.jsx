import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  addPost,
  updateNewPostText,
  toggleIsFetching,
  setUserProfile
} from "../../Redux/profileReducer";
import axios from "axios";

class ProfileAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/2`
      )
      .then((profile) => {
        this.props.toggleIsFetching(false);
        this.props.setUserProfile(profile.data);
      });
  }

  render() {
    return (
      <Profile 
        {...this.props}
        updateNewPostText={this.props.updateNewPostText}
        addPost={this.props.addPost}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    state: state.ProfilePage,
    isFetching: state.ProfilePage.isFetching,
  };
};

const ProfileContainer = connect(
  mapStateToProps,
  {
    updateNewPostText,
    addPost,
    toggleIsFetching,
    setUserProfile
  }
)(ProfileAPIComponent);

export default ProfileContainer