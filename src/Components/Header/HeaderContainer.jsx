import { connect } from "react-redux";
import { setUserData } from "../../Redux/authReducer";
import React from "react";
import Header from "./Header";
class HeaderAPIComponent extends React.Component {
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

const HeaderContainer = connect(mapStateToProps, {
  setUserData,
})(HeaderAPIComponent);

export default HeaderContainer;
