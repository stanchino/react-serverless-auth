import React from "react";

import {
  Email,
  ResetButton,
  PasswordResetRequestForm,
  SubmitButton,
} from "react-serverless-auth";

export default props => (
  <PasswordResetRequestForm {...props}>
    <Email autoComplete={"email"} />
    <SubmitButton>Send Code</SubmitButton>
    <ResetButton>Cancel</ResetButton>
  </PasswordResetRequestForm>
);