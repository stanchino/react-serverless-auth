"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formError = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.authWatcher = authWatcher;
exports.confirmRegistrationWatcher = confirmRegistrationWatcher;
exports.passwordResetConfirmWatcher = passwordResetConfirmWatcher;
exports.passwordResetRequestWatcher = passwordResetRequestWatcher;
exports.signInWatcher = signInWatcher;
exports.signOutWatcher = signOutWatcher;
exports.signUpWatcher = signUpWatcher;
exports.resendConfirmationCodeWatcher = resendConfirmationCodeWatcher;

var _effects = require("redux-saga/effects");

var _reduxForm = require("redux-form");

var _reduxSagaRoutines = require("redux-saga-routines");

var _actions = require("../actions");

var _signUp = require("./signUp");

var _confirmRegistration = require("./confirmRegistration");

var _signIn = require("./signIn");

var _auth = require("./auth");

var _signOut = require("./signOut");

var _passwordResetRequest = require("./passwordResetRequest");

var _passwordResetConfirm = require("./passwordResetConfirm");

var _resendConfirmationCode = require("./resendConfirmationCode");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(authWatcher),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(confirmRegistrationWatcher),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(passwordResetConfirmWatcher),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(passwordResetRequestWatcher),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(signInWatcher),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(signOutWatcher),
    _marked7 = /*#__PURE__*/_regenerator2.default.mark(signUpWatcher),
    _marked8 = /*#__PURE__*/_regenerator2.default.mark(resendConfirmationCodeWatcher);

function authWatcher() {
    return _regenerator2.default.wrap(function authWatcher$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.takeEvery)(_actions.authRoutine.TRIGGER, _auth.handleAuthSaga);

                case 2:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}

function confirmRegistrationWatcher() {
    return _regenerator2.default.wrap(function confirmRegistrationWatcher$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeEvery)(_actions.confirmRegistrationRoutine.TRIGGER, _confirmRegistration.handleConfirmRegistrationSaga);

                case 2:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

function passwordResetConfirmWatcher() {
    return _regenerator2.default.wrap(function passwordResetConfirmWatcher$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.next = 2;
                    return (0, _effects.takeEvery)(_actions.passwordResetConfirmRoutine.TRIGGER, _passwordResetConfirm.handlePasswordResetConfirmSaga);

                case 2:
                case "end":
                    return _context3.stop();
            }
        }
    }, _marked3, this);
}

function passwordResetRequestWatcher() {
    return _regenerator2.default.wrap(function passwordResetRequestWatcher$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    _context4.next = 2;
                    return (0, _effects.takeEvery)(_actions.passwordResetRequestRoutine.TRIGGER, _passwordResetRequest.handlePasswordResetRequestSaga);

                case 2:
                case "end":
                    return _context4.stop();
            }
        }
    }, _marked4, this);
}

function signInWatcher() {
    return _regenerator2.default.wrap(function signInWatcher$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    _context5.next = 2;
                    return (0, _effects.takeEvery)(_actions.signInRoutine.TRIGGER, _signIn.handleSignInSaga);

                case 2:
                case "end":
                    return _context5.stop();
            }
        }
    }, _marked5, this);
}

function signOutWatcher() {
    return _regenerator2.default.wrap(function signOutWatcher$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    _context6.next = 2;
                    return (0, _effects.takeEvery)(_actions.signOutRoutine.TRIGGER, _signOut.handleSignOutSaga);

                case 2:
                case "end":
                    return _context6.stop();
            }
        }
    }, _marked6, this);
}

function signUpWatcher() {
    return _regenerator2.default.wrap(function signUpWatcher$(_context7) {
        while (1) {
            switch (_context7.prev = _context7.next) {
                case 0:
                    _context7.next = 2;
                    return (0, _effects.takeEvery)(_actions.signUpRoutine.TRIGGER, _signUp.handleSignUpSaga);

                case 2:
                case "end":
                    return _context7.stop();
            }
        }
    }, _marked7, this);
}

function resendConfirmationCodeWatcher() {
    return _regenerator2.default.wrap(function resendConfirmationCodeWatcher$(_context8) {
        while (1) {
            switch (_context8.prev = _context8.next) {
                case 0:
                    _context8.next = 2;
                    return (0, _effects.takeEvery)(_actions.resendConfirmationCodeRoutine.TRIGGER, _resendConfirmationCode.handleResendConfirmationCodeSaga);

                case 2:
                case "end":
                    return _context8.stop();
            }
        }
    }, _marked8, this);
}

var formError = exports.formError = function formError(action, errors) {
    return (0, _effects.put)(action.failure(new _reduxForm.SubmissionError(errors)));
};

exports.default = [_reduxSagaRoutines.routinePromiseWatcherSaga, authWatcher, confirmRegistrationWatcher, passwordResetConfirmWatcher, passwordResetRequestWatcher, resendConfirmationCodeWatcher, signInWatcher, signOutWatcher, signUpWatcher, _auth.handleAuthSaga];