import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        localStatus: this.props.status
    }

    changeEditMode = () => {
        if (!this.state.editMode) {
            this.setState({editMode: true});
        } else {
            this.setState({editMode: false});
            this.props.setProfileStatus(this.state.localStatus);
        }
    }

    onStatusChange = (event) => {
        this.setState({localStatus: event.currentTarget.value})
    }

    render() {
        return (
            <div className="Profile__status">
                {!this.state.editMode ?
                    <div className="Profile__status__text">
                        <h3 onDoubleClick={this.changeEditMode}>{this.props.status}</h3>
                    </div>
                    :
                    <div className="profile__status__changeText">
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.changeEditMode}
                               value={this.state.localStatus}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;