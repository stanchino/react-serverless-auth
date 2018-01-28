import { connect } from "react-redux";
import { componentOrNull } from "../helpers";

const Component = ({ isLoggedIn, loading, children, component = null }) => (
    loading ? null : (isLoggedIn ? componentOrNull(component) : children)
);

export default connect(state => ({
    loading: state.auth.loading,
    isLoggedIn: state.auth.isLoggedIn,
}), () => ({}))(Component);