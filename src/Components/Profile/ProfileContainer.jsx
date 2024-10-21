import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  addPost,
  updateNewPostText,
  setUserProfile,
} from "../../Redux/profileReducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.setUserProfile(userId)
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

export default compose(
    connect(mapStateToProps, {
      updateNewPostText,
      addPost,
      setUserProfile
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

