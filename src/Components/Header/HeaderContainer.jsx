import { connect } from "react-redux";
import { setUserData, toggleIsFetching } from "../../Redux/authReducer";
import React from "react";
import Header from "./Header";
import axios from "axios";

class HeaderAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((user) => {
        let { id, email, login } = user.data.data;
        if (user.data.resultCode === 0) {
          this.props.setUserData(id, email, login);
        }
        this.props.toggleIsFetching(false);
      });
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
  toggleIsFetching,
})(HeaderAPIComponent);

export default HeaderContainer;
