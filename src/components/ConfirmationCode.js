import React from "react";
import { Field } from "redux-form";
import { FormField } from ".";

export default props => (
    <Field component={FormField} type="text" name="code" placeholder="Confirmation Code" {...props} />
)