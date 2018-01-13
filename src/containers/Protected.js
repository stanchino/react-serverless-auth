import { connect } from "react-redux";

const componentOrNull = (component) => (
    component ? component : null
);

const ProtectedComponent = ({ isLoggedIn, children, component }) => (
    isLoggedIn ? children : componentOrNull(component)
);

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(ProtectedComponent);