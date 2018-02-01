export const flash = { flash: { error: null, notice: null } };

export const initialState = {
  loading: false,
  isLoggedIn: false,
  isRegistered: false,
  passwordResetRequested: false,
  profile: null,
  pathname: '/',
  user: null,
  ...flash
};