import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC } from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    state: state.UsersPage.UsersState
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followAC(id));
    },
    unfollow: (id) => {
      dispatch(unfollowAC(id));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
