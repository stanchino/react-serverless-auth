import userAttributes from "../userAttributes";

describe("test userAttributes", () => {
    it("maps the attributes properly on success", () => {
        const user = {
            getUserAttributes: (callback) => {
                callback(undefined, [{
                    getName: () => ('key'),
                    getValue: () => ('value')
                }]);
            }
        };

        expect(userAttributes(user)).resolves.toEqual({ key: 'value' });
    });

    it("rejects the promise", () => {
        const user = {
            getUserAttributes: (callback) => {
                callback('error');
            }
        };

        expect(userAttributes(user)).rejects.toEqual('error');
    })
});