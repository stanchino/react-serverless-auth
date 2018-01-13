import signOutRequest from "../signOut";

const handlesResponse = (method, result, exected_method) => {
    expect(signOutRequest({
        globalSignOut: callback => callback[method](result),
        signOut: jest.fn(),
        clearCachedTokens: jest.fn(),
        clearCachedDeviceKeyAndPassword:jest.fn()
    }))[exected_method].toEqual(result);
}

describe("test signOutRequest", () => {
    it ('when the response is successful', () => handlesResponse('onSuccess', 'success', 'resolves'));
    it ('when the response is an error', () =>  handlesResponse('onFailure', 'error', 'rejects'));
});