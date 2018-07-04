export const LOGIN = 'login';
export const LOGOUT = 'logout';
export const RECEIVE_OAUTH = 'receive_oauth';
export const REQUEST_OAUTH = 'request_oauth';
export const FETCH_USER_SUCCESS = 'fetch_user_success';

export const loginGithub = () => ({type: LOGIN});
export const logoutGithub = () => ({type: LOGOUT});
export const receiveOauth = (data) => ({type: RECEIVE_OAUTH, data});
export const requestOauth = () => ({type: REQUEST_OAUTH});