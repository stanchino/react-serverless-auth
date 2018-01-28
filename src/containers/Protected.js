import { connect } from "react-redux";
import { componentOrNull } from "../helpers";

const ProtectedComponent = ({ isLoggedIn, children, component }) => (
    isLoggedIn ? children : componentOrNull(component)
);

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(ProtectedComponent);