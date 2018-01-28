import React from "react";
import { NavLink } from "react-router-dom";
import { Unauthenticated } from ".";

export default props => (
    <Unauthenticated>
        <NavLink {...props} />
    </Unauthenticated>
);