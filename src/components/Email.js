import React from "react";
import { Field } from "redux-form";
import { email, required } from "redux-form-validators";

import { FormField } from ".";

export default props => (
    <Field component={FormField} type="text" name="email" placeholder="Email" validate={ [required(), email()] } {...props} />
);