import { OPEN_SIDENAV, CLOSE_SIDENAV } from '../actionTypes';

const initialState = {
  active: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDENAV:
      return { ...state, active: action.payload.active };
    case CLOSE_SIDENAV:
      return { ...state, active: action.payload.active };
    default:
      return state;
  }
};
