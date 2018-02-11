import { connect } from "react-redux";
import { componentOrNull } from "../helpers";

const ProtectedComponent = ({ isLoggedIn, children, component, ...props }) => (
    isLoggedIn ? children : componentOrNull(component, props)
);

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(ProtectedComponent);