import axios from 'axios';

import { user } from '../constants/routes';
import { asyncActions } from '../util/AsyncUtil';
import { LOG_IN, SIGN_UP } from '../actionTypes';

export const signUpUser = userInput => (dispatch) => {
  dispatch(asyncActions(SIGN_UP).loading(true));

  return axios.post(user.SIGN_UP_URL, userInput)
    .then((response) => {
      dispatch(asyncActions(SIGN_UP).loading(false));
      dispatch(asyncActions(SIGN_UP).success(response.data));
      return response;
    })
    .catch((error) => {
      dispatch(asyncActions(SIGN_UP).loading(false));
      dispatch(asyncActions(SIGN_UP).failure(true, error.response.data.message));
    });
};
