import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    getProfileStatus,
    setProfilePhoto,
    setProfileStatus,
    setUserProfile,
    updateProfileDescription,
} from "../../Redux/profileReducer";
import {Navigate, useParams} from "react-router-dom";
import {compose} from "redux";

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>;
    };
}

class ProfileContainer extends React.Component {
    userId = this.props.match.params.userId;

    refreshProfile() {
        if (!this.userId && !this.props.isAuth) {
            // window.location.href = "/login";
            this.setState({redirectToLogin: true})
            return;
        }
        if (!this.userId) {
            this.userId = this.props.authorizedUserId;
        }
        this.props.setUserProfile(this.userId)
        this.props.getProfileStatus(this.userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.userId = this.props.match.params.userId
            this.refreshProfile()
        }
    }

    setUserProfileStatus = (status) => {
        this.props.setProfileStatus(status)
    }

    render() {
        // if (!this.userId && !this.props.isAuth) {
        //     return <Navigate to="/login"/>;
        // }
        if (this.state?.redirectToLogin) {
            return <Navigate to="/login"/>;
        }

        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                addPost={this.props.addPost}
                setProfileStatus={this.setUserProfileStatus}
                savePhoto={this.props.setProfilePhoto}
                updateProfileDescription={this.props.updateProfileDescription}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.ProfilePage,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.id,
    };
};

export default compose(
    connect(mapStateToProps, {
        addPost,
        setUserProfile,
        getProfileStatus,
        setProfileStatus,
        setProfilePhoto,
        updateProfileDescription,
    }),
    withRouter,
)(ProfileContainer)

