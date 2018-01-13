import React from "react";

export default ( { message, style }) => (
    message ? <div style={style}><strong>{message}</strong></div> : null
);