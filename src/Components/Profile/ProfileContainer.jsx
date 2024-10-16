import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  addPost,
  updateNewPostText,
  setUserProfile,
} from "../../Redux/profileReducer";
import {Navigate, useParams} from "react-router-dom";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileAPIComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.setUserProfile(userId)
  }

  render() {
    if(!this.props.isAuth) return <Navigate to="/login" />;
    return (
      <Profile
        {...this.props}
        updateNewPostText={this.props.updateNewPostText}
        addPost={this.props.addPost}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    state: state.ProfilePage,
    isFetching: state.ProfilePage.isFetching,
    isAuth: state.auth.isAuth,
  };
};

let ProfileUrlDataContainer = withRouter(ProfileAPIComponent);

const ProfileContainer = connect(mapStateToProps, {
  updateNewPostText,
  addPost,
  setUserProfile
})(ProfileUrlDataContainer);

export default ProfileContainer;
