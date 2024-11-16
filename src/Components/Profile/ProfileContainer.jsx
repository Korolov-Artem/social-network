import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getProfileStatus, setProfileStatus, setUserProfile,} from "../../Redux/profileReducer";
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

    componentDidMount() {
        if (!this.userId && !this.props.isAuth) {
            window.location.href = "/login";
            return;
        }
        if (!this.userId) {
            this.userId = this.props.userId;
        }
        this.props.setUserProfile(this.userId)
        this.props.getProfileStatus(this.userId);
    }

    setUserProfileStatus = (status) => {
        this.props.setProfileStatus(status)
    }

    render() {
        if (!this.userId && !this.props.isAuth) {
            return <Navigate to="/login"/>;
        }

        return (
            <Profile
                {...this.props}
                addPost={this.props.addPost}
                setProfileStatus={this.setUserProfileStatus}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.ProfilePage,
        userId: state.auth.id,
        isAuth: state.auth.isAuth,
    };
};

export default compose(
    connect(mapStateToProps, {
        addPost,
        setUserProfile,
        getProfileStatus,
        setProfileStatus,
    }),
    withRouter,
)(ProfileContainer)

