import { connect } from "react-redux";

import FlashMessages from "../components/FlashMessages";

const mapStateToProps = state => ({
    flash: state.auth.flash
});

export default connect(mapStateToProps)(FlashMessages);