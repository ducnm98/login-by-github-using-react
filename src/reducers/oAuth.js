import { RECEIVE_LOGIN, RECEIVE_LOGOUT } from "../actions";

const intialState = {
  user: null
}

export default (state = intialState, action) => {
  switch (action.type) {
    case RECEIVE_LOGIN:
      const data = action.payload;
      return {
        ...state,
        user: data
      }
    case RECEIVE_LOGOUT:
      return {
        ...state,
        user: null
      }
    
    default:
      return state;
  }
};
