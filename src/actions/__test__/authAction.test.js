import axios from 'axios';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import { loginUser, signUpUser, logOut } from '../authAction';

const BASE_URL = 'https://tranquil-harbor-77266.herokuapp.com/api/v1';
const user = { email: 'victory2@gmail.com', password: 'password123' };
const data = {
  id: 1, firstname: 'johnny', lastname: 'done', email: 'victory2@gmail.com', password: 'password123'
};
const token = 'tevhdvchsvdhch ds';
const message = 'Invalid email and password.';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with authentication', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User login is successful', () => {
    mock.onPost(`${BASE_URL}/users/login`).reply(200, {
      user,
      status: 'success',
    });

    const mockedActions = [
      {
        type: 'LOG_IN_LOADING',
        payload: true,
      },
      {
        type: 'LOG_IN_LOADING',
        payload: false
      },
      {
        type: 'LOG_IN_SUCCESS',
        payload: undefined,
      }
    ];

    const store = mockStore({ user: {} });
    return store.dispatch(loginUser()).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('User login is unsuccessful', () => {
    mock.onPost(`${BASE_URL}/users/login`).reply(400, {
      status: 'error',
      message
    });

    const mockedActions = [
      {
        type: 'LOG_IN_LOADING',
        payload: true,
      },
      {
        type: 'LOG_IN_LOADING',
        payload: false
      },
      {
        type: 'LOG_IN_FAILING',
        payload: {
          error: message,
          status: true
        },
      }
    ];

    const store = mockStore({ user: {} });
    return store.dispatch(loginUser()).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    })
      .catch(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });

  it('User signup is successful', () => {
    mock.onPost(`${BASE_URL}/users/signup`).reply(201, {
      data,
      token,
      loading: true,
    });

    const mockedActions = [
      {
        type: 'SIGN_UP_LOADING',
        payload: true,
      },
      {
        type: 'SIGN_UP_LOADING',
        payload: false
      },
      {
        type: 'SIGN_UP_SUCCESS',
        payload: data,
      }
    ];

    const store = mockStore({ user: {} });
    return store.dispatch(signUpUser({ user })).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('User signup is successful', () => {
    mock.onPost(`${BASE_URL}/users/signup`).reply(500, {
      loading: true,
    });

    const mockedActions = [
      {
        type: 'SIGN_UP_LOADING',
        payload: true,
      },
      {
        type: 'SIGN_UP_LOADING',
        payload: false
      },
      {
        type: 'SIGN_UP_FAILING',
        payload: {
          error: undefined,
          status: true
        },
      }
    ];

    const store = mockStore({ user: {} });
    return store.dispatch(signUpUser(user)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    }).catch(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('should logout user', () => {
    const mockedActions = {
      type: 'LOG_OUT',
      payload: {
        isAuth: false
      }
    };

    const store = mockStore({ user: {} });
    expect(store.dispatch(logOut())).toEqual(mockedActions);
  });
});
