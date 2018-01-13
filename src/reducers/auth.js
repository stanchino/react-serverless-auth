import { signUpRoutine, confirmationRoutine, signInRoutine, authRoutine, signOutRoutine } from "../actions";

const flash = { flash: { error: null, notice: null } };

export const initialState = {
    loading: false,
    isLoggedIn: false,
    isRegistered: false,
    profile: null,
    pathname: '/',
    user: null,
    ...flash
};

export default (state = initialState, action) => {
    switch (action.type) {
        case signUpRoutine.REQUEST:
        case confirmationRoutine.REQUEST:
        case signInRoutine.REQUEST:
        case signOutRoutine.REQUEST:
            return { ...state, loading: true, ...flash, ...action.payload };
        case authRoutine.REQUEST:
            return { ...state, loading: true };
        case signUpRoutine.SUCCESS:
        case signInRoutine.SUCCESS:
            return { ...state, isRegistered: true, ...action.payload };
        case signUpRoutine.FAILURE:
            return { ...state, isRegistered: false };
        case authRoutine.SUCCESS:
            return { ...state, isLoggedIn: true, isRegistered: true, ...action.payload };
        case authRoutine.FAILURE:
            return { ...state, isLoggedIn: false, ...action.payload };
        case signUpRoutine.FULFILL:
        case confirmationRoutine.FULFILL:
        case signInRoutine.FULFILL:
        case authRoutine.FULFILL:
            return { ...state, loading: false };
        case signOutRoutine.FULFILL:
            return initialState;
        default:
            return state;
    }
};