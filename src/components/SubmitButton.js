import React from "react";

export default ({ children, form: { pristine, submitting } }) => (
    <button type={"submit"} disabled={pristine || submitting}>{children}</button>
);