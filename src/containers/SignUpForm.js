import React from "react";

import { connectedForm } from "./AuthForm";
import { signUp } from "../actions";

const ConnectedForm = connectedForm({ form: "signUp", onSubmit: signUp});

export default ({ children, ...props }) => (
    <ConnectedForm {...props}>
        {children}
    </ConnectedForm>
)