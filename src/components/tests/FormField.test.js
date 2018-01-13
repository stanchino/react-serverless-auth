import React from "react";
import renderer from "react-test-renderer";

import { FormField } from "..";

describe("FormField", () => {
    it("matches the snapshot", () => {
        const tree = renderer.create(<FormField meta={ { touched: true, error: "error" } }/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});