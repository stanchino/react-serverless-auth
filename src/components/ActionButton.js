import React from "react";

export default ({ children, onClick, form: { submitting } }) => (
    <button type={"button"} onClick={onClick} disabled={submitting}>{children}</button>
);