import diaryReducer from '../diaryReducer';
import {
  GET_ALL_DIARIES, GET_ONE_DIARY, CREATE_DIARY, UPDATE_DIARY, DELETE_DIARY
} from '../../actionTypes';

const initialState = {
  error: false,
  errorMessage: null,
  loading: false,
  success: false,
  diary: {},
  diaries: []
};

const diaries = [
  {
    body: 'Today was a dream come true.',
    created_at: '2018-08-16T10:19:09.246Z',
    id: 9,
    title: 'Trip To The Famous Lake',
    users_id: 8
  },
  {
    body: 'Today was a dream come true.',
    created_at: '2018-08-16T10:19:09.246Z',
    id: 9,
    title: 'Trip To The Famous Lake',
    users_id: 8
  }
];

describe('Diary reducer', () => {
  it('should return the initial state', () => {
    expect(diaryReducer(undefined, {})).toEqual(initialState);
  });

  it('should return loading true while calling endpoint', () => {
    const state = diaryReducer([], { type: 'GET_ALL_DIARIES_LOADING', payload: true });
    expect(state).toEqual({ loading: true });
  });

  it('should return all diaries when GET_ALL_DIARIES_SUCCESS', () => {
    const state = diaryReducer([], { type: 'GET_ALL_DIARIES_SUCCESS', payload: diaries });
    expect(state).toEqual({ diaries });
  });

  it('should return ERROR when GET_ALL_DIARIES_FAILING', () => {
    const state = diaryReducer([], { type: 'GET_ALL_DIARIES_FAILING', payload: { status: true, error: 'It Failed' } });
    expect(state).toEqual({ error: true, errorMessage: 'It Failed' });
  });

  it('should return loading true while calling endpoint', () => {
    const state = diaryReducer([], { type: 'GET_ONE_DIARY_LOADING', payload: true });
    expect(state).toEqual({ loading: true });
  });

  it('should return all diaries when GET_ONE_DIARY_SUCCESS', () => {
    const state = diaryReducer([], { type: 'GET_ONE_DIARY_SUCCESS', payload: diaries[0] });
    expect(state).toEqual({ diary: diaries[0], success: true });
  });

  it('should return ERROR when GET_ONE_DIARY_FAILING', () => {
    const state = diaryReducer([], { type: 'GET_ONE_DIARY_FAILING', payload: { status: true, error: 'It Failed' } });
    expect(state).toEqual({ error: true, errorMessage: 'It Failed' });
  });

  it('should return loading true while calling endpoint', () => {
    const state = diaryReducer([], { type: 'CREATE_DIARY_LOADING', payload: true });
    expect(state).toEqual({ loading: true });
  });

  it('should return all diaries when CREATE_DIARY_SUCCESS', () => {
    const state = diaryReducer([], { type: 'CREATE_DIARY_SUCCESS', payload: diaries[0] });
    expect(state).toEqual({ diary: diaries[0], error: false, errorMessage: null });
  });

  it('should return ERROR when CREATE_DIARY_FAILING', () => {
    const state = diaryReducer([], { type: 'CREATE_DIARY_FAILING', payload: { status: true, error: 'It Failed' } });
    expect(state).toEqual({ error: true, errorMessage: 'It Failed' });
  });

  it('should return loading true while calling endpoint', () => {
    const state = diaryReducer([], { type: 'UPDATE_DIARY_LOADING', payload: true });
    expect(state).toEqual({ loading: true });
  });

  it('should return all diaries when UPDATE_DIARY_SUCCESS', () => {
    const state = diaryReducer([], { type: 'UPDATE_DIARY_SUCCESS', payload: diaries[0] });
    expect(state).toEqual({ diary: diaries[0], error: false, errorMessage: null });
  });

  it('should return ERROR when UPDATE_DIARY_FAILING', () => {
    const state = diaryReducer([], { type: 'UPDATE_DIARY_FAILING', payload: { status: true, error: 'It Failed' } });
    expect(state).toEqual({ error: true, errorMessage: 'It Failed' });
  });

  it('should return loading true while calling endpoint', () => {
    const state = diaryReducer([], { type: 'DELETE_DIARY_LOADING', payload: true });
    expect(state).toEqual({ loading: true });
  });

  it('should return all diaries when DELETE_DIARY_SUCCESS', () => {
    const state = diaryReducer([], { type: 'DELETE_DIARY_SUCCESS', payload: { message: 'Deleted' } });
    expect(state).toEqual({ message: 'Deleted', error: false, errorMessage: null });
  });

  it('should return ERROR when DELETE_DIARY_FAILING', () => {
    const state = diaryReducer([], { type: 'DELETE_DIARY_FAILING', payload: { status: true, error: 'It Failed' } });
    expect(state).toEqual({ error: true, errorMessage: 'It Failed' });
  });
});
