import React, {useState} from "react";
import "./ProfileData.css";
import BetterLoader from "../../Common/Loader/BetterLoader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import defaultImage from "../../../Assets/Images/User.png";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataDescription from "./ProfileDataDescription";

const ProfileData = (props) => {
    let [editMode, setEditMode] = useState(false)
    let ProfileDataErrors = (props) => {
        if (props.errors) {
            return (
                <div>
                    {props.errors[0]}
                </div>
            )
        }
    }

    if (!props.profile) {
        return <BetterLoader/>;
    } else {
        const onProfilePhotoSelected = (e) => {
            if (e.target.files.length) {
                props.setProfilePhoto(e.target.files[0])
            }
        }

        return (
            <div className="Profile__personalData">
                <div className="Profile__wallpaper">
                    <img src="https://wallpaper.dog/large/20489811.jpg" alt=""/>
                </div>
                <div className="Profile__image">
                    <img src={props.profile.photos.large || defaultImage} alt=""/>
                </div>
                <div className="Profile__uploadImage_button">
                    {props.isOwner && <input type={"file"} onChange={onProfilePhotoSelected}/>}
                </div>
                <div className="Profile__name">
                    <h2>{props.profile.fullName}</h2>
                </div>
                <ProfileStatus status={props.status} className="Profile__status"
                               setProfileStatus={props.setProfileStatus}
                />
                <div className="Profile__interactButtons">
                    <button>Follow</button>
                    <button>Message</button>
                </div>
                <div className="Profile__edit_button">
                    {props.isOwner && <button onClick={() => {
                        setEditMode(true)
                    }}
                    >Edit Profile</button>}
                </div>
                {!editMode ? <ProfileDataDescription profile={props.profile}/> :
                    <ProfileDataForm profile={props.profile}
                                     updateProfileDescription={props.updateProfileDescription}
                                     setEditMode={setEditMode} ProfileDataErrors={ProfileDataErrors}
                    />}
            </div>
        );
    }
};

export default ProfileData;
