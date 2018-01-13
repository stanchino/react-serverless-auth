import React from "react";

import { connectedForm } from "./AuthForm";
import { confirmation } from "../actions";

const ConnectedForm = connectedForm({ form: "confirmation", onSubmit: confirmation});

export default ({ children, ...props }) => (
    <ConnectedForm {...props}>
        {children}
    </ConnectedForm>
)