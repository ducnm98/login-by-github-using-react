export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const RECEIVE_LOGIN = "RECEIVE_LOGIN";
export const REQUEST_LOGOUT = "REQUEST_LOGOUT";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";

export const requestLogin = () => ({ type: REQUEST_LOGIN });
export const receiveLogin = data => ({ type: RECEIVE_LOGIN, payload: data });
export const requestLogout = () => ({ type: REQUEST_LOGOUT});
export const receiveLogout = data => ({ type: RECEIVE_LOGOUT, payload: data});