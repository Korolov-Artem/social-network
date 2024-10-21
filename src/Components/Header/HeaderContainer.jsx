import { connect } from "react-redux";
import { setUserData } from "../../Redux/authReducer";
import React from "react";
import Header from "./Header";
import {compose} from "redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setUserData()
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    state: state.auth,
  };
};

export default compose(
    connect(mapStateToProps, {
      setUserData,
    })
)(HeaderContainer)

