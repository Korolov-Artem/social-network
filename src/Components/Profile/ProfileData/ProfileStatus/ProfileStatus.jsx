import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    changeEditMode = () => {
        if (!this.state.editMode) {
            this.setState({editMode: true});
        } else {
            this.setState({editMode: false});
        }
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
                        <input autoFocus={true} onBlur={this.changeEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;