import axios from 'axios';

import { user } from '../constants/routes';
import setAuthToken from '../util/AuthToken';
import { asyncActions } from '../util/AsyncUtil';
import { LOG_IN, SIGN_UP, LOG_OUT } from '../actionTypes';

export const signUpUser = userInput => (dispatch) => {
  dispatch(asyncActions(SIGN_UP).loading(true));

  return axios.post(user.SIGN_UP_URL, userInput)
    .then((response) => {
      // saving token into the local storage
      localStorage.setItem('token', response.data.token);
      // setting token to request headers for authentication
      dispatch(asyncActions(SIGN_UP).loading(false));
      dispatch(asyncActions(SIGN_UP).success(response.data.data));
      return response;
    })
    .catch((error) => {
      dispatch(asyncActions(SIGN_UP).loading(false));
      dispatch(asyncActions(SIGN_UP).failure(true, error.response.data.message));
      throw error;
    });
};

export const loginUser = userInput => (dispatch) => {
  dispatch(asyncActions(LOG_IN).loading(true));

  return axios.post(user.LOG_IN_URL, userInput)
    .then((response) => {
      // saving token into the local storage
      localStorage.setItem('token', response.data.token);
      // setting token to request headers for authentication
      setAuthToken(response.data.token);
      dispatch(asyncActions(LOG_IN).loading(false));
      dispatch(asyncActions(LOG_IN).success(response.data.data));
      return response;
    })
    .catch((error) => {
      dispatch(asyncActions(LOG_IN).loading(false));
      dispatch(asyncActions(LOG_IN).failure(true, error.response.data.message));
      throw error;
    });
};

export const logOut = () => (
  { type: LOG_OUT, payload: { isAuth: false } }
);
