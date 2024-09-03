import { connect } from "react-redux";
import SideBar from "./SideBar";

let mapStateToProps = (state) => {
    return {
        state: state.SideBar
    }
}

const SideBarContainer = connect(mapStateToProps)(SideBar)

export default SideBarContainer
