import React from "react";
import { NavLink } from "react-router-dom";

import {
  Email,
  Password,
  ResetButton,
  SignInForm,
  SubmitButton,
} from "react-serverless-auth";

export default props => (
  <SignInForm {...props}>
    <Email autoComplete={"email"} />
    <Password autoComplete={"new-password"} />
    <NavLink to={"/auth/reset"}>Forgotten Password?</NavLink>
    <SubmitButton>Sign In</SubmitButton>
    <ResetButton>Cancel</ResetButton>
  </SignInForm>
);