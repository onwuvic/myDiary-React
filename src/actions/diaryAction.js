import axios from 'axios';

import { diary, diaryParams } from '../constants/routes';
import { asyncActions } from '../util/AsyncUtil';
import {
  GET_ALL_DIARIES, GET_ONE_DIARY, CREATE_DIARY, UPDATE_DIARY, DELETE_DIARY
} from '../actionTypes';

export const getAllDiaries = () => (dispatch) => {
  dispatch(asyncActions(GET_ALL_DIARIES).loading(true));

  axios.get(diary.DIARIES_URL)
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

export const createDiary = newDiary => (dispatch) => {
  dispatch(asyncActions(CREATE_DIARY).loading(true));

  return axios.post(diary.DIARIES_URL, newDiary)
    .then((response) => {
      dispatch(asyncActions(CREATE_DIARY).loading(false));
      dispatch(asyncActions(CREATE_DIARY).success(response.data));
      return response;
    })
    .catch((error) => {
      dispatch(asyncActions(CREATE_DIARY).loading(false));
      dispatch(asyncActions(CREATE_DIARY).failure(true, error.response.data.message));
      throw error;
    });
};

export const updateDiary = (id, updatedDiary) => (dispatch) => {
  dispatch(asyncActions(UPDATE_DIARY).loading(true));

  return axios.put(diaryParams(id).ONE_DIARY_URL, updatedDiary)
    .then((response) => {
      dispatch(asyncActions(UPDATE_DIARY).loading(false));
      dispatch(asyncActions(UPDATE_DIARY).success(response.data));
      return response;
    })
    .catch((error) => {
      dispatch(asyncActions(UPDATE_DIARY).loading(false));
      dispatch(asyncActions(UPDATE_DIARY).failure(true, error.response.data.message));
      throw error;
    });
};

export const deleteDiary = id => (dispatch) => {
  dispatch(asyncActions(DELETE_DIARY).loading(true));

  axios.delete(diaryParams(id).ONE_DIARY_URL)
    .then((response) => {
      dispatch(asyncActions(DELETE_DIARY).loading(false));
      dispatch(asyncActions(DELETE_DIARY).success(response.data));
    })
    .catch((error) => {
      dispatch(asyncActions(DELETE_DIARY).loading(false));
      dispatch(asyncActions(DELETE_DIARY).failure(true, error.response.data.message));
    });
};
