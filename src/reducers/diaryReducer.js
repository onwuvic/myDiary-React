import { asyncActionName } from '../util/AsyncUtil';
import { GET_ALL_DIARIES, GET_ONE_DIARY } from '../actionTypes';

const initialState = {
  error: false,
  errorMessage: null,
  loading: false,
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
      return { ...state, diary: action.payload };
    case asyncActionName(GET_ONE_DIARY).failure:
      return {
        ...state, error: action.payload.status, errorMessage: action.payload.error
      };
    default:
      return state;
  }
};

export default diaryReducer;
