import React from "react";
import loader from "../../../Assets/Images/loader.svg";

const Loader = (props) => {
  return (
    <div>
        <img src={loader} alt={loader}/>
    </div>
  );
};

export default Loader