export const expectCallbacks = callbacks => {
    callbacks.forEach(callback => expect(callback).toHaveBeenCalled() )
};