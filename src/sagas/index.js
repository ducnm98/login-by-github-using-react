import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { REQUEST_OAUTH, receiveOauth  } from '../actions'
import oauth from './oauth';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* OauthUser(action) {

  // const user = yield call(Api.fetchUser, action.payload.userId);
  const dataUser = oauth.authenticate();
  yield put(receiveOauth(dataUser));

}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(REQUEST_OAUTH, OauthUser);
}

export default mySaga;