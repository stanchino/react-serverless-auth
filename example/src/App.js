import React from "react";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router";

import { Unauthenticated, UnauthenticatedLink, SignOutLink, PasswordResetForm } from "react-serverless-auth";

import {
    ConfirmationForm,
    Home,
    NotFound,
    Private,
    Public,
    PasswordResetRequestForm,
    PasswordResetConfirmForm,
    RouteWithRedirect,
    SignInForm,
    SignUpForm,
} from "./components";

import "./App.css";

export default () => (
    <div className="container">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/public">Public</NavLink>
            <NavLink to="/private">Private</NavLink>
            <UnauthenticatedLink to="/auth/login">Sign In</UnauthenticatedLink>
            <UnauthenticatedLink to="/auth/register">Sign Up</UnauthenticatedLink>
            <SignOutLink className={"btn"}>Sign Out</SignOutLink>
        </nav>
        <Switch>
            <Route path={"/"} exact><Home /></Route>
            <Route path={"/public"}><Public /></Route>
            <Route path={"/private"}><Private /></Route>
            <RouteWithRedirect to={"/"} path={"/auth/login"} component={SignInForm} />
            <RouteWithRedirect to={"/"} path={"/auth/register"} component={SignUpForm} />
            <RouteWithRedirect to={"/"} path={"/auth/confirm"} component={ConfirmationForm} />
            <Route path={"/auth/reset"}>
                <Unauthenticated component={NotFound}>
                    <PasswordResetForm
                        requestForm={PasswordResetRequestForm}
                        confirmationForm={PasswordResetConfirmForm}
                    />
                </Unauthenticated>
            </Route>
            <Route><NotFound /></Route>
        </Switch>
    </div>
);