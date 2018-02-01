import React from "react";
import { NavLink } from "react-router-dom";

import {
  Email,
  Password,
  PasswordConfirmation,
  ResetButton,
  SignUpForm ,
  SubmitButton,
} from "react-serverless-auth";


export default props => (
  <SignUpForm {...props}>
    <Email autoComplete={"email"}/>
    <Password autoComplete={"new-password"}/>
    <PasswordConfirmation autoComplete={"new-password"}/>
    <SubmitButton>Sign Up</SubmitButton>
    <ResetButton>Cancel</ResetButton>
    <br/>
    <NavLink to={"/auth/reset"}>Forgotten Password?</NavLink>
  </SignUpForm>
);