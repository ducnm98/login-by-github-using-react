import { RECEIVE_TAKE_EVERY, RECEIVE_TAKE_LATEST } from "../actions";

const intialState = {
  counter: 0
}

export default (state = intialState, action) => {
  switch (action.type) {
    case RECEIVE_TAKE_EVERY:
      return {
        ...state,
        counter: action.payload
      }; 
    case RECEIVE_TAKE_LATEST:
      return {
        ...state,
        counter: action.payload
      };
    default:
      return state;
  }
};
