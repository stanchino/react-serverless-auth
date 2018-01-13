import React from "react";
import { connect } from "react-redux";

const LoginLink = ({ children, loading, isLoggedIn }) => (
    loading || isLoggedIn ? null : children
);

export default connect(state => ({
    loading: state.auth.loading,
    isLoggedIn: state.auth.isLoggedIn,
}), () => ({}))(LoginLink);
