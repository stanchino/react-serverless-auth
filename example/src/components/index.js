import React from "react";
import { Route, Redirect } from "react-router";
import { NavLink } from "react-router-dom";

import {
    ActionButton,
    ConfirmationCode,
    Email,
    Password,
    PasswordConfirmation,
    Protected,
    ResetButton,
    PasswordResetRequestForm as PasswordResetRequest,
    PasswordResetConfirmForm as PasswordResetConfirm,
    SignInForm as SignIn,
    SignUpForm as SignUp,
    ConfirmRegistrationForm as Confirmation,
    SubmitButton,
} from "react-serverless-auth";

export const RouteWithRedirect = ({ path , to, ...props }) => (
    <Route path={path}>
        <Protected {...props}>
            <Redirect to={to}/>
        </Protected>
    </Route>
);

export const Home = props => (
    <div {...props}>Home</div>
);

export const Public = props => (
    <div {...props}>Public</div>
);

export const PrivateComponent = props => (
    <div {...props}>Private</div>
);

export const SignInForm = props => (
    <SignIn {...props}>
        <Email autoComplete={"email"} />
        <Password autoComplete={"new-password"} />
        <NavLink to={"/auth/reset"}>Forgotten Password?</NavLink>
        <SubmitButton>Sign In</SubmitButton>
        <ResetButton>Cancel</ResetButton>
    </SignIn>
);

export const SignUpForm = props => (
    <SignUp {...props}>
        <Email autoComplete={"email"}/>
        <Password autoComplete={"new-password"}/>
        <PasswordConfirmation autoComplete={"new-password"}/>
        <SubmitButton>Sign Up</SubmitButton>
        <ResetButton>Cancel</ResetButton>
        <br/>
        <NavLink to={"/auth/reset"}>Forgotten Password?</NavLink>
    </SignUp>
);

export const ConfirmationForm = props => (
    <Confirmation {...props}>
        <ConfirmationCode />
        <ActionButton>Request New Code</ActionButton>
        <SubmitButton>Confirm</SubmitButton>
        <ResetButton>Reset</ResetButton>
    </Confirmation>
);

export const Private = props => (
    <Protected component={SignInForm} {...props}>
        <PrivateComponent />
    </Protected>
);

export const NotFound = props => (
    <div {...props}>
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
    </div>
);

export const PasswordResetRequestForm = props => (
    <PasswordResetRequest {...props}>
        <Email autoComplete={"email"} />
        <SubmitButton>Send Code</SubmitButton>
        <ResetButton>Cancel</ResetButton>
    </PasswordResetRequest>
);

export const PasswordResetConfirmForm = props => (
    <PasswordResetConfirm {...props}>
        <ConfirmationCode />
        <Password autoComplete={"new-password"}/>
        <PasswordConfirmation autoComplete={"new-password"}/>
        <SubmitButton>Reset Password</SubmitButton>
        <ResetButton>Cancel</ResetButton>
    </PasswordResetConfirm>
);


