import React from "react";

export default ({ children, form: { pristine, submitting, reset } }) => (
    <button type={"reset"} disabled={pristine || submitting} onClick={reset}>{children}</button>
);