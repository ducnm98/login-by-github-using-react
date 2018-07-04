import { LOGIN, LOGOUT, RECEIVE_OAUTH } from "../actions";

export default function(state = "", { type, data = {} }) {
  switch (type) {
    case RECEIVE_OAUTH:
      return data;

    case LOGOUT:
      return null;

    default:
      return state;
  }
}
