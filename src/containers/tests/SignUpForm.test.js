import React from "react";

import { matchSnapshot } from "./sharedExamples";
import { initialState } from "../../reducers/auth";

import { SignUpForm } from "../..";

describe("ConfirmationForm", () => {
    it("matches the snapshot", () => matchSnapshot(<SignUpForm/>, initialState));
});