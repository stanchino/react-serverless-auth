import React from "react";

import { matchSnapshot } from "./sharedExamples";
import { initialState } from "../../reducers/auth";

import { ConfirmationForm } from "..";

describe("ConfirmationForm", () => {
    it("matches the snapshot", () => matchSnapshot(<ConfirmationForm/>, initialState));
});