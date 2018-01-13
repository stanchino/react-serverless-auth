import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signInRoutine } from "../actions";

import { ActionButton } from "..";

const mapDispatchToProps = dispatch => ({
   onClick: bindActionCreators(signInRoutine, dispatch)
});

export default connect(null, mapDispatchToProps)(ActionButton)