import axios from 'axios';

import { diary, diaryParams } from '../constants/routes';
import { asyncActions } from '../util/AsyncUtil';
import { GET_ALL_DIARIES, GET_ONE_DIARY } from '../actionTypes';

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

export const getOneDiaries = id => (dispatch) => {
  dispatch(asyncActions(GET_ONE_DIARY).loading(true));

  axios.get(diaryParams(id).ONE_DIARY_URL)
    .then((response) => {
      dispatch(asyncActions(GET_ONE_DIARY).loading(false));
      dispatch(asyncActions(GET_ONE_DIARY).success(response.data));
    })
    .catch((error) => {
      dispatch(asyncActions(GET_ONE_DIARY).loading(false));
      dispatch(asyncActions(GET_ONE_DIARY).failure(true, error.response.data.message));
    });
};
