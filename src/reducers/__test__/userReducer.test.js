import userReducer from '../userReducer';

import { LOG_IN, SIGN_UP, LOG_OUT } from '../../actionTypes';

const initialState = {
  error: false,
  errorMessage: null,
  loading: false,
  user: {},
  isAuth: false,
  success: false
};

const user = {
  email: 'victor@gmail.com',
  firstname: 'victor',
  id: 8,
  lastname: 'onwuzor'
};

describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should return loading true while signing up', () => {
    const state = userReducer([], { type: 'SIGN_UP_LOADING', payload: true });
    expect(state).toEqual({ loading: true });
  });

  it('should return user when SIGN_UP_SUCCESS', () => {
    const state = userReducer([], { type: 'SIGN_UP_SUCCESS', payload: user });
    expect(state).toEqual(
      {
        user, isAuth: true, success: true, errorMessage: null, error: false
      }
    );
  });

  it('should return ERROR when SIGN_UP_FAILING', () => {
    const state = userReducer([], { type: 'SIGN_UP_FAILING', payload: { status: true, error: 'It Failed' } });
    expect(state).toEqual({ error: true, errorMessage: 'It Failed' });
  });

  it('should return loading true while signing up', () => {
    const state = userReducer([], { type: 'LOG_IN_LOADING', payload: true });
    expect(state).toEqual({ loading: true });
  });

  it('should return user when LOG_IN_SUCCESS', () => {
    const state = userReducer([], { type: 'LOG_IN_SUCCESS', payload: user });
    expect(state).toEqual(
      {
        user, isAuth: true, success: true, errorMessage: null, error: false
      }
    );
  });

  it('should return ERROR when LOG_IN_FAILING', () => {
    const state = userReducer([], { type: 'LOG_IN_FAILING', payload: { status: true, error: 'It Failed' } });
    expect(state).toEqual({ error: true, errorMessage: 'It Failed' });
  });

  it('should return isAuth false when Log out', () => {
    const state = userReducer([], { type: 'LOG_OUT', payload: { isAuth: false } });
    expect(state).toEqual({
      isAuth: false,
      error: false,
      errorMessage: null
    });
  });
});
