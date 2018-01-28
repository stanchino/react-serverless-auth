import signOutRequest from "../signOut";

const request = (method, result) => (
    signOutRequest({
        globalSignOut: callback => callback[method](result),
        signOut: jest.fn(),
        clearCachedTokens: jest.fn(),
        clearCachedDeviceKeyAndPassword:jest.fn()
    })
);

describe("test signOutRequest", () => {
    it ('when the response is successful', () => expect(request('onSuccess', 'success')).resolves.toEqual('success'));
    it ('when the response is an error', () =>  expect(request('onFailure', 'error')).rejects.toEqual('error'));
});