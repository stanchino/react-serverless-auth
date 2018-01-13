import React from "react";

import { matchSnapshot } from "./sharedExamples";
import { initialState } from "../../reducers/auth";

import { SignInForm } from "..";

describe("ConfirmationForm", () => {
    it("matches the snapshot", () => matchSnapshot(<SignInForm/>, initialState));
});