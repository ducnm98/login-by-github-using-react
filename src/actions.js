export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const RECEIVE_LOGIN = "RECEIVE_LOGIN";
export const REQUEST_LOGOUT = "REQUEST_LOGOUT";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";
export const RECEIVE_TAKE_EVERY = "RECEIVE_TAKE_EVERY";
export const REQUEST_TAKE_EVERY = "REQUEST_TAKE_EVERY";
export const RECEIVE_TAKE_LATEST = "RECEIVE_TAKE_LATEST";
export const REQUEST_TAKE_LATEST = "REQUEST_TAKE_LATEST";

export const requestLogin = provider => ({ type: REQUEST_LOGIN, payload: provider });
export const receiveLogin = data => ({ type: RECEIVE_LOGIN, payload: data });

export const requestLogout = () => ({ type: REQUEST_LOGOUT});
export const receiveLogout = data => ({ type: RECEIVE_LOGOUT, payload: data});

export const requestTakeLatest = data => ({ type: REQUEST_TAKE_LATEST, payload: data});
export const receiveTakeLatest = data => ({ type: RECEIVE_TAKE_LATEST, payload: data});

export const requestTakeEvery = data => ({ type: REQUEST_TAKE_EVERY, payload: data});
export const receiveTakeEvery = data => ({type: RECEIVE_TAKE_EVERY, payload: data});