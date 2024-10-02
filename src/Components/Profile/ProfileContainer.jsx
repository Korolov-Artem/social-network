import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  addPost,
  updateNewPostText,
  toggleIsFetching,
  setUserProfile,
} from "../../Redux/profileReducer";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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
    );
  }
}

let mapStateToProps = (state) => {
  return {
    state: state.ProfilePage,
    isFetching: state.ProfilePage.isFetching,
  };
};

let ProfileUrlDataContainer = withRouter(ProfileAPIComponent);

const ProfileContainer = connect(mapStateToProps, {
  updateNewPostText,
  addPost,
  toggleIsFetching,
  setUserProfile,
})(ProfileUrlDataContainer);

export default ProfileContainer;
