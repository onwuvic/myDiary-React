import axios from 'axios';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import { displaySideNav, hideSideNav } from '../eventListenerAction';

// const user = { email: 'victory2@gmail.com', password: 'password123' };
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with Event', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should display side bar', () => {
    const mockedActions = {
      type: 'OPEN_SIDENAV',
      payload: {
        active: true
      }
    };

    const store = mockStore({ event: {} });
    expect(store.dispatch(displaySideNav())).toEqual(mockedActions);
  });

  it('should hide side bar', () => {
    const mockedActions = {
      type: 'CLOSE_SIDENAV',
      payload: {
        active: false
      }
    };

    const store = mockStore({ event: {} });
    expect(store.dispatch(hideSideNav())).toEqual(mockedActions);
  });
});
