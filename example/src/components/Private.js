import React from "react";

import { Protected } from "react-serverless-auth";
import { SignInForm } from ".";

export const PrivateComponent = props => (
  <div {...props}>Private</div>
);

export default props => (
  <Protected component={SignInForm} {...props}>
    <PrivateComponent />
  </Protected>
);