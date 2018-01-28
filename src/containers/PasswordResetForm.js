import { connect } from "react-redux";
import { elementOrCreate } from "../helpers";

const PasswordResetContainer = ({ passwordResetRequested, requestForm, confirmationForm, ...props }) => (
    passwordResetRequested
        ? elementOrCreate({ component: confirmationForm, ...props })
        : elementOrCreate({ component: requestForm, ...props })
);

const mapStateToProps = state => ({
    passwordResetRequested: state.auth.passwordResetRequested
});

export default connect(mapStateToProps)(PasswordResetContainer);