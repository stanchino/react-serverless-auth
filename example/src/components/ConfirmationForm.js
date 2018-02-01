import React from "react";

import {
  ActionButton,
  ConfirmationCode,
  ResetButton,
  ConfirmRegistrationForm as Confirmation,
  SubmitButton,
} from "react-serverless-auth";

export default props => (
  <Confirmation {...props}>
    <ConfirmationCode />
    <ActionButton>Request New Code</ActionButton>
    <SubmitButton>Confirm</SubmitButton>
    <ResetButton>Reset</ResetButton>
  </Confirmation>
);