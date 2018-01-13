import React from "react";
import { mount } from "enzyme";

import { initialState } from "../../reducers/auth";
import { matchSnapshot, app } from "./sharedExamples";

import { UnauthenticatedLink } from "..";

const Link = (<div/>);
const subject = <UnauthenticatedLink>{Link}</UnauthenticatedLink>;

describe("UnauthenticatedLink Component", () => {
    it("matches the snapshot", () => matchSnapshot(subject, initialState));

    it("while page is loading", () => {
        expect(mount(app(subject, { loading: true }))).not.toContainReact(Link);
    });

    describe("when the state is loaded", () => {
        const state = isLoggedIn => ({ loading: false, isLoggedIn: isLoggedIn });

        it("when user is signed in is loaded", () => expect(mount(app(subject, state(true)))).not.toContainReact(Link));
        it("when user is not signed in is loaded", () => expect(mount(app(subject, state(false)))).toContainReact(Link));
    });
});