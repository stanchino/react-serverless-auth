import { createRoutine, bindRoutineToReduxForm } from "redux-saga-routines";

import * as types from "./types";

export const signUpRoutine = createRoutine(types.SIGN_UP);
export const confirmationRoutine = createRoutine(types.CONFIRM);
export const signInRoutine = createRoutine(types.SIGN_IN);
export const authRoutine = createRoutine(types.AUTH);
export const signOutRoutine = createRoutine(types.SIGN_OUT);

export const signIn = bindRoutineToReduxForm(signInRoutine);
export const signUp = bindRoutineToReduxForm(signUpRoutine);
export const confirmation = bindRoutineToReduxForm(confirmationRoutine);