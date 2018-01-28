import { bindRoutineToReduxForm, createRoutine } from "redux-saga-routines";

import * as types from "./types";

export const authRoutine = createRoutine(types.AUTH);
export const confirmRegistrationRoutine = createRoutine(types.CONFIRM);
export const passwordResetRequestRoutine = createRoutine(types.PASSWORD_RESET_REQUEST);
export const passwordResetConfirmRoutine = createRoutine(types.PASSWORD_RESET_CONFIRM);
export const signInRoutine = createRoutine(types.SIGN_IN);
export const signOutRoutine = createRoutine(types.SIGN_OUT);
export const signUpRoutine = createRoutine(types.SIGN_UP);

export const signIn = bindRoutineToReduxForm(signInRoutine);
export const signUp = bindRoutineToReduxForm(signUpRoutine);
export const confirmRegistration = bindRoutineToReduxForm(confirmRegistrationRoutine);
export const passwordResetRequest = bindRoutineToReduxForm(passwordResetRequestRoutine);
export const passwordResetConfirm = bindRoutineToReduxForm(passwordResetConfirmRoutine);