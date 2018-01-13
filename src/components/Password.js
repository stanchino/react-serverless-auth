import React from "react";
import { Field } from "redux-form";
import { required } from "redux-form-validators";

import { FormField } from ".";

export default props => (
    <Field component={FormField} type="password" name="password" placeholder="Password" validate={ required() } {...props} />
);
