import { asyncActionName } from '../util/AsyncUtil';
import { LOG_IN, SIGN_UP } from '../actionTypes';

const initialState = {
  error: false,
  errorMessage: null,
  loading: false,
  user: {},
  isAuth: false,
  success: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(SIGN_UP).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(SIGN_UP).success:
      return {
        ...state, user: action.payload.data, success: true, error: false, errorMessage: null
      };
    case asyncActionName(SIGN_UP).failure:
      return {
        ...state, error: action.payload.status, errorMessage: action.payload.error
      };
    default:
      return state;
  }
};

export default userReducer;
