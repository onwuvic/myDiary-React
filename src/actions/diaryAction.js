import axios from 'axios';

import { diary } from '../constants/routes';
import { asyncActions } from '../util/AsyncUtil';
import { GET_ALL_DIARIES } from '../actionTypes';

export const getAllDiaries = () => (dispatch) => {
  dispatch(asyncActions(GET_ALL_DIARIES).loading(true));

  axios.get(diary.ALL_DIARIES_URL)
    .then((response) => {
      dispatch(asyncActions(GET_ALL_DIARIES).loading(false));
      dispatch(asyncActions(GET_ALL_DIARIES).success(response.data));
    })
    .catch((error) => {
      dispatch(asyncActions(GET_ALL_DIARIES).loading(false));
      dispatch(asyncActions(GET_ALL_DIARIES).failure(true, error.response.data.message));
    });
};

export const loginUser = userInput => (dispatch) => {

};
