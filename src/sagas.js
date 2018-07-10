import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { 
  REQUEST_LOGIN, 
  receiveLogin, 
  REQUEST_LOGOUT, 
  receiveLogout,
  REQUEST_TAKE_EVERY,
  receiveTakeEvery,
  REQUEST_TAKE_LATEST,
  receiveTakeLatest,
} from "./actions";

import { authenticate } from './oauthFetchData';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loginViaGithub(action) {
  console.log('action.payload', action)
  const data = yield call(authenticate, action.payload);
  yield put(receiveLogin(data.user));
}

function* logoutViaGithub(action) {
  const data = {};
  yield put(receiveLogout(data))
}

function* takeEveryAction(action) {
  console.log("take every action begin")
  setTimeout(function() {
    console.log("take every action end")
  }, 2000);
  let data = action.payload + 1;
  yield put(receiveTakeEvery(data))
}

function* takeLatestAction(action) {
  console.log("take latest action begin")
  setTimeout(function() {
    console.log("take latest action end")
  }, 2000);
  let data = action.payload - 2;
  yield put(receiveTakeLatest(data))
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeEvery(REQUEST_LOGIN, loginViaGithub);
  yield takeEvery(REQUEST_LOGOUT, logoutViaGithub);
  yield takeLatest(REQUEST_TAKE_LATEST, takeLatestAction);
  yield takeEvery(REQUEST_TAKE_EVERY, takeEveryAction);
}
