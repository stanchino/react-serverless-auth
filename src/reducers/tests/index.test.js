import { reducer as formReducer  } from "redux-form";
import auth from "../auth";
import reducers from "..";

describe("index reducer", () => {
    it("exports the auth reducer", () => expect(reducers.auth).toEqual(auth));
    it("exports the form reducer", () => expect(reducers.form).toEqual(formReducer));
})