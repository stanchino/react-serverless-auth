import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { resendConfirmationCodeRoutine, passwordResetRequestRoutine } from "../actions";

const ResendConfirmationCode = ({ loading, isLoggedIn, children, actions, formType, form: { submitting }, ...props }) => (
  isLoggedIn || loading ? null : <button {...props} type={"button"} onClick={actions[formType]} disabled={submitting}>{children}</button>
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    registration: resendConfirmationCodeRoutine,
    passwordReset: passwordResetRequestRoutine
  }, dispatch),
});

export default connect(state => ({
  loading: state.auth.loading,
  isLoggedIn: state.auth.isLoggedIn
}), mapDispatchToProps)(ResendConfirmationCode);