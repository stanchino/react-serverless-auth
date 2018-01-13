import React from "react";
import renderer from "react-test-renderer";
import createStore from "redux-mock-store";

import Flash from "../Flash";

const store = createStore()({ auth: { flash: {} } });

describe("Flash", () =>{
    it("matches the snapshot", () => {
        expect(renderer.create(<Flash store={store} />).toJSON()).toMatchSnapshot();
    });
});