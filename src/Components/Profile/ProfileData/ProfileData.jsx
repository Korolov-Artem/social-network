import React from "react";
import "./ProfileData.css";
import BetterLoader from "../../Common/Loader/BetterLoader";

const ProfileData = (props) => {
  if (!props.profile) {
    return <BetterLoader />;
  } else {
    return (
      <div className="Profile__personalData">
        <div className="Profile__wallpaper">
          <img src="https://wallpaper.dog/large/20489811.jpg" />
        </div>
        <div className="Profile__ava">
          <img src={props.profile.photos.large} alt="" />
        </div>
        <div className="Profile__name">
          <h2>{props.profile.fullName}</h2>
        </div>
        <div className="Profile__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="Profile__interactButtons">
          <button>Follow</button>
          <button>Message</button>
        </div>
      </div>
    );
  }
};

export default ProfileData;
