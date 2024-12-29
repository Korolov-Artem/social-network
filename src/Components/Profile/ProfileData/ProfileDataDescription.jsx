import React from "react";

const ProfileDataDescription = (props) => {
    return (
        <div className="Profile__description">
            <p><b>About Me: </b>{props.profile.aboutMe}</p>
            <p><b>Looking for a Job: </b>{props.profile.lookingForAJob ? "True" : "False"}</p>
            {props.profile.lookingForAJob ? <p>
                <b>My Skills: </b>{props.profile.lookingForAJobDescription}
            </p> : null}
            <p><b>My github: </b>{props.profile.contacts.github}</p>
        </div>

    )
}

export default ProfileDataDescription