import React from "react";
import { connectForm } from "./connectForm";
import { connect } from "react-redux";
import { confirmRegistration } from "../actions";

const ConnectedForm = connectForm({ form: "confirmRegistration", onSubmit: confirmRegistration});

const ConfirmRegistrationForm = ({ profile, noEmail, ...props }) => (
  profile && profile.email ? <ConnectedForm {...props} /> : noEmail
);

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps)(ConfirmRegistrationForm)