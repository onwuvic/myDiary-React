import { asyncActionName } from '../util/AsyncUtil';
import {
  GET_ALL_DIARIES, GET_ONE_DIARY, CREATE_DIARY, UPDATE_DIARY, DELETE_DIARY
} from '../actionTypes';

const initialState = {
  error: false,
  errorMessage: null,
  loading: false,
  success: false,
  diary: {},
  diaries: []
};

const diaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(GET_ALL_DIARIES).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(GET_ALL_DIARIES).success:
      return { ...state, diaries: action.payload };
    case asyncActionName(GET_ALL_DIARIES).failure:
      return {
        ...state, error: action.payload.status, errorMessage: action.payload.error
      };
    case asyncActionName(GET_ONE_DIARY).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(GET_ONE_DIARY).success:
      return { ...state, diary: action.payload, success: true };
    case asyncActionName(GET_ONE_DIARY).failure:
      return {
        ...state, error: action.payload.status, errorMessage: action.payload.error
      };
    case asyncActionName(CREATE_DIARY).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(CREATE_DIARY).success:
      return {
        ...state,
        diary: action.payload,
        error: false,
        errorMessage: null
      };
    case asyncActionName(CREATE_DIARY).failure:
      return {
        ...state, error: action.payload.status, errorMessage: action.payload.error
      };
    case asyncActionName(UPDATE_DIARY).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(UPDATE_DIARY).success:
      return {
        ...state,
        diary: action.payload,
        error: false,
        errorMessage: null
      };
    case asyncActionName(UPDATE_DIARY).failure:
      return {
        ...state, error: action.payload.status, errorMessage: action.payload.error
      };
    case asyncActionName(DELETE_DIARY).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(DELETE_DIARY).success:
      return {
        ...state,
        message: action.payload.message,
        error: false,
        errorMessage: null
      };
    case asyncActionName(DELETE_DIARY).failure:
      return {
        ...state, error: action.payload.status, errorMessage: action.payload.error
      };
    default:
      return state;
  }
};

export default diaryReducer;
