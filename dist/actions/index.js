"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordResetConfirm = exports.passwordResetRequest = exports.confirmRegistration = exports.signUp = exports.signIn = exports.signUpRoutine = exports.signOutRoutine = exports.signInRoutine = exports.resendConfirmationCodeRoutine = exports.passwordResetConfirmRoutine = exports.passwordResetRequestRoutine = exports.confirmRegistrationRoutine = exports.authRoutine = undefined;

var _reduxSagaRoutines = require("redux-saga-routines");

var _types = require("./types");

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var authRoutine = exports.authRoutine = (0, _reduxSagaRoutines.createRoutine)(types.AUTH);
var confirmRegistrationRoutine = exports.confirmRegistrationRoutine = (0, _reduxSagaRoutines.createRoutine)(types.CONFIRM);
var passwordResetRequestRoutine = exports.passwordResetRequestRoutine = (0, _reduxSagaRoutines.createRoutine)(types.PASSWORD_RESET_REQUEST);
var passwordResetConfirmRoutine = exports.passwordResetConfirmRoutine = (0, _reduxSagaRoutines.createRoutine)(types.PASSWORD_RESET_CONFIRM);
var resendConfirmationCodeRoutine = exports.resendConfirmationCodeRoutine = (0, _reduxSagaRoutines.createRoutine)(types.RESET_CONFIRMATION_CODE);
var signInRoutine = exports.signInRoutine = (0, _reduxSagaRoutines.createRoutine)(types.SIGN_IN);
var signOutRoutine = exports.signOutRoutine = (0, _reduxSagaRoutines.createRoutine)(types.SIGN_OUT);
var signUpRoutine = exports.signUpRoutine = (0, _reduxSagaRoutines.createRoutine)(types.SIGN_UP);

var signIn = exports.signIn = (0, _reduxSagaRoutines.bindRoutineToReduxForm)(signInRoutine);
var signUp = exports.signUp = (0, _reduxSagaRoutines.bindRoutineToReduxForm)(signUpRoutine);
var confirmRegistration = exports.confirmRegistration = (0, _reduxSagaRoutines.bindRoutineToReduxForm)(confirmRegistrationRoutine);
var passwordResetRequest = exports.passwordResetRequest = (0, _reduxSagaRoutines.bindRoutineToReduxForm)(passwordResetRequestRoutine);
var passwordResetConfirm = exports.passwordResetConfirm = (0, _reduxSagaRoutines.bindRoutineToReduxForm)(passwordResetConfirmRoutine);