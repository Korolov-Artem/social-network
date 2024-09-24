import React from "react";
import loader from "../../../Assets/Images/loader.svg";
import "./Loader.css"

const Loader = (props) => {
  return (
    <div>
        <img src={loader} alt={loader} className="Loader__loader" />
    </div>
  );
};

export default Loader