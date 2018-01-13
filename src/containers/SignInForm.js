import React from "react";

import { connectedForm } from "./AuthForm";
import { signIn } from "../actions";

const ConnectedForm = connectedForm({ form: "signIn", onSubmit: signIn});

export default ({ children, ...props }) => (
    <ConnectedForm {...props}>
        {children}
    </ConnectedForm>
)