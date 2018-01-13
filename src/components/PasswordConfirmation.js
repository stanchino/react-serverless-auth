import React from "react";
import { Field } from "redux-form";
import { confirmation, required } from "redux-form-validators";

import { FormField } from ".";

export default props => (
    <Field component={FormField} type="password" name="password_confirmation" placeholder="Confirm Password" validate={ [required(), confirmation({ field: "password" })] } {...props} />
);
