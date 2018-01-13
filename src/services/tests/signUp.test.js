import signUpRequest from "../signUp";
import { userPool } from "../utils";

const payload = { email: "john@doe.com", password: "pass"};

const respondsWith = (description, defer, err, success, expected) => {
    it (description, () => {
        const spy = jest.spyOn(userPool, "signUp").mockImplementation((username, password, attributes, validation, callback) => {
            callback(err, success);
        });
        expect(signUpRequest(payload.email, payload.password))[defer].toEqual(expected);
        expect(spy).toHaveBeenCalled();
    });
};

describe("test signUpRequest", () => {
    respondsWith("registers the user successfully", "resolves", null, { success: 'success'}, { success: 'success'});
    respondsWith("raises an error when the registration fails", "rejects", { error: 'error'}, null, { error: 'error'});
});