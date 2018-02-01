import React from "react";

import {
  ConfirmationCode,
  Password,
  PasswordConfirmation,
  ResetButton,
  PasswordResetConfirmForm ,
  SubmitButton,
} from "react-serverless-auth";

export default props => (
  <PasswordResetConfirmForm {...props}>
    <ConfirmationCode />
    <Password autoComplete={"new-password"}/>
    <PasswordConfirmation autoComplete={"new-password"}/>
    <SubmitButton>Reset Password</SubmitButton>
    <ResetButton>Cancel</ResetButton>
  </PasswordResetConfirmForm>
);