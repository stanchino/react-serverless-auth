import { authRoutine } from "../actions/index";

import { initialState } from "./initialState";

export default (state = initialState, action) => {
    switch (action.type) {
        case authRoutine.REQUEST:
            return { ...state, loading: true };
        case authRoutine.SUCCESS:
            return { ...state, isLoggedIn: true, isRegistered: true, ...action.payload };
        case authRoutine.FAILURE:
            return { ...state, isLoggedIn: false, ...action.payload };
        case authRoutine.FULFILL:
            return { ...state, loading: false };
        default:
            return state;
    }
};