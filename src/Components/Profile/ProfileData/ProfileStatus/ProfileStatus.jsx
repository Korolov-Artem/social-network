import React, {useState} from "react";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const changeEditMode = () => {
        if (!editMode) {
            setEditMode(true);
        } else {
            setEditMode(false);
            props.setProfileStatus(status)
        }
    }
    const changeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className="Profile__status">
            {!editMode ?
                <div className="Profile__status__text">
                    <h3 onDoubleClick={changeEditMode}>{props.status || "---------------"}</h3>
                </div>
                :
                <div className="profile__status__changeText">
                    <input onChange={changeStatus} autoFocus={true} onBlur={changeEditMode}
                           value={status}
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatus;