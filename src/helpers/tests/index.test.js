import React from "react";
import { mount } from "enzyme";

import { elementOrCreate, componentOrNull } from "..";

describe("elementOrCreate", () => {
    it("with existing element", () => {
        const component = <div />;
        expect(mount(elementOrCreate({ component: component }))).toContainReact(component);
    });

    it("with a string element", () => {
        const component = 'div';
        expect(mount(elementOrCreate({ component: component }))).toContainReact(<div />);
    });
});

describe("componentOrNull", () => {
    it("with component", () => {
        const component = 'div';
        expect(mount(componentOrNull(component))).toContainReact(<div />);
    });

    it("with a string element", () => {
        expect(componentOrNull()).toEqual(null);
    });
});