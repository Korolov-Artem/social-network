import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    getProfileStatus,
    setProfileStatus,
    setUserProfile,
    updateNewPostText
} from "../../Redux/profileReducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
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
        if (!this.userId) {
            this.userId = 28322;
        }
        this.props.setUserProfile(this.userId)
        this.props.getProfileStatus(this.userId);
    }

    setUserProfileStatus = (status) => {
        this.props.setProfileStatus(status)
    }

    render() {
        return (
            <Profile
                {...this.props}
                updateNewPostText={this.props.updateNewPostText}
                addPost={this.props.addPost}
                setProfileStatus={this.setUserProfileStatus}
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
        setUserProfile,
        getProfileStatus,
        setProfileStatus,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

