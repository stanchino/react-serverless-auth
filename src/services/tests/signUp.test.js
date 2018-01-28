import signUpRequest from "../signUp";
import { userPool } from "../utils";

const payload = { email: "john@doe.com", password: "pass"};

const request = payload => (
    signUpRequest(payload.email, payload.password)
);

const respondsWith = (description, err, success, expected, resolves = true) => {
    it (description, () => {
        const spy = jest.spyOn(userPool, "signUp").mockImplementation((username, password, attributes, validation, callback) => {
            callback(err, success);
        });
        if (resolves) {
            expect(request(payload)).resolves.toEqual(expected);
        } else {
            expect(request(payload)).rejects.toEqual(expected);
        }
        expect(spy).toHaveBeenCalled();
    });
};

describe("test signUpRequest", () => {
    respondsWith("registers the user successfully", null, { success: 'success'}, { success: 'success'});
    respondsWith("raises an error when the registration fails", { error: 'error'}, null, { error: 'error'}, false);
});