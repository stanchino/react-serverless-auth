import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signOutRoutine } from "../actions";

const Logout = ({ loading, isLoggedIn, children, actions, ...props }) => (
    !isLoggedIn || loading ? null : <button {...props} onClick={actions.signOutRoutine}>{children}</button>
);

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ signOutRoutine }, dispatch),
});

export default connect(state => ({
    loading: state.auth.loading,
    isLoggedIn: state.auth.isLoggedIn
}), mapDispatchToProps)(Logout);