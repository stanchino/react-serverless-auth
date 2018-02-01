import { initialState } from "../initialState";

export const testAction = (reducer, action, expectedState) => {
  it(`should handle ${action.type}`, () => {
    expect(reducer({}, action)).toEqual(expectedState);
  });
};

export const behavesLikeReducerWithPayload = (reducer, routine, success, failure, initial = initialState) => {
  testAction(reducer, routine.request(), {
    loading: true,
    flash: initial.flash
  });

  testAction(reducer, routine.success({ profile: 'payload' }), {
    ...success,
    profile: 'payload'
  });

  testAction(reducer, routine.failure(), failure);

  testAction(reducer, routine.fulfill(), {
    loading: false
  });
};

export const behavesLikeReducerWithoutPayload = (reducer, routine, success, failure) => {
  testAction(reducer, routine.request(), {
    loading: true,
    flash: initialState.flash
  });

  testAction(reducer, routine.success(), success);

  testAction(reducer, routine.failure(), failure);

  testAction(reducer, routine.fulfill(), {
    loading: false
  });
};