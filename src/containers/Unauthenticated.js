import { connect } from "react-redux";
import { componentOrNull } from "../helpers";

const Component = ({ isLoggedIn, loading, children, loadingComponent = null, component = null }) => (
    loading ? loadingComponent : (isLoggedIn ? componentOrNull(component) : children)
);

export default connect(state => ({
    loading: state.auth.loading,
    isLoggedIn: state.auth.isLoggedIn,
}), () => ({}))(Component);