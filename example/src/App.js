import React from "react";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router";

import { Unauthenticated, UnauthenticatedLink, SignOutLink, PasswordResetForm, authRoutes } from "react-serverless-auth";

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
            <UnauthenticatedLink to={authRoutes.signIn}>Sign In</UnauthenticatedLink>
            <UnauthenticatedLink to={authRoutes.register}>Sign Up</UnauthenticatedLink>
            <SignOutLink className={"btn"}>Sign Out</SignOutLink>
        </nav>
        <Switch>
            <Route path={"/"} exact><Home /></Route>
            <Route path={"/public"}><Public /></Route>
            <Route path={"/private"}><Private /></Route>
            <RouteWithRedirect to={"/"} path={authRoutes.signIn} component={SignInForm} />
            <RouteWithRedirect to={"/"} path={authRoutes.register} component={SignUpForm} />
            <RouteWithRedirect to={"/"} path={authRoutes.confirm} component={ConfirmationForm} />
            <Route path={authRoutes.reset}>
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