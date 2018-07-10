import { combineReducers } from "redux";

import oAuth from "./oAuth";
import test from "./test";

export default combineReducers({
  oAuth,
  test
});
