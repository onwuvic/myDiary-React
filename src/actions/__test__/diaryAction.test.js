import axios from 'axios';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import {
  getAllDiaries, getOneDiaries, createDiary, updateDiary, deleteDiary
} from '../diaryAction';

const BASE_URL = 'https://tranquil-harbor-77266.herokuapp.com/api/v1';
const entry = { id: 1, title: 'the title', body: 'the body' };
const message = 'None of your diaries was found with this ID';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with diary', () => {
  const id = 1;
  afterEach(() => {
    mock.reset();
  });

  it('should get all diary', () => {
    mock.onGet(`${BASE_URL}/entries`).reply(200, {
      entry
    });

    const mockedActions = [
      {
        type: 'GET_ALL_DIARIES_LOADING',
        payload: true,
      },
      {
        type: 'GET_ALL_DIARIES_LOADING',
        payload: false
      },
      {
        type: 'GET_ALL_DIARIES_SUCCESS',
        payload: {
          entry
        },
      }
    ];

    const store = mockStore({ diary: {} });
    return store.dispatch(getAllDiaries()).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('should fail to get all diary', () => {
    mock.onGet(`${BASE_URL}/entries`).reply(400, {
      entry
    });

    const mockedActions = [
      {
        type: 'GET_ALL_DIARIES_LOADING',
        payload: true,
      },
      {
        type: 'GET_ALL_DIARIES_LOADING',
        payload: false
      },
      {
        type: 'GET_ALL_DIARIES_FAILING',
        payload: {
          error: undefined,
          status: true
        }
      }
    ];

    const store = mockStore({ diary: {} });
    return store.dispatch(getAllDiaries()).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    }).catch(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('should get one diary', () => {
    mock.onGet(`${BASE_URL}/entries/${id}`).reply(200, {
      entry
    });

    const mockedActions = [
      {
        type: 'GET_ONE_DIARY_LOADING',
        payload: true,
      },
      {
        type: 'GET_ONE_DIARY_LOADING',
        payload: false
      },
      {
        type: 'GET_ONE_DIARY_SUCCESS',
        payload: {
          entry
        },
      }
    ];

    const store = mockStore({ diary: {} });
    return store.dispatch(getOneDiaries(id)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('should fail getting one diary', () => {
    mock.onGet(`${BASE_URL}/entries/${id}`).reply(404, {
      entry
    });

    const mockedActions = [
      {
        type: 'GET_ONE_DIARY_LOADING',
        payload: true,
      },
      {
        type: 'GET_ONE_DIARY_LOADING',
        payload: false
      },
      {
        type: 'GET_ONE_DIARY_FAILING',
        payload: {
          error: undefined,
          status: true
        },
      }
    ];

    const store = mockStore({ diary: {} });
    return store.dispatch(getOneDiaries(id)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    })
      .catch(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });

  it('should create diary', () => {
    mock.onPost(`${BASE_URL}/entries`).reply(201, {
      entry
    });

    const mockedActions = [
      {
        type: 'CREATE_DIARY_LOADING',
        payload: true,
      },
      {
        type: 'CREATE_DIARY_LOADING',
        payload: false
      },
      {
        type: 'CREATE_DIARY_SUCCESS',
        payload: {
          entry
        },
      }
    ];

    const store = mockStore({ diary: {} });
    return store.dispatch(createDiary(entry)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('should fail creating diary', () => {
    mock.onGet(`${BASE_URL}/entries`).reply(400, {
      entry
    });

    const mockedActions = [
      {
        type: 'CREATE_DIARY_LOADING',
        payload: true,
      },
      {
        type: 'CREATE_DIARY_LOADING',
        payload: false
      },
      {
        type: 'CREATE_DIARY_FAILING',
        payload: {
          error: undefined,
          status: true
        },
      }
    ];

    const store = mockStore({ diary: {} });
    return store.dispatch(createDiary(entry)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    })
      .catch(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });

  it('should update a diary', () => {
    mock.onPut(`${BASE_URL}/entries/${id}`).reply(200, {
      entry
    });

    const mockedActions = [
      {
        type: 'UPDATE_DIARY_LOADING',
        payload: true,
      },
      {
        type: 'UPDATE_DIARY_LOADING',
        payload: false
      },
      {
        type: 'UPDATE_DIARY_SUCCESS',
        payload: {
          entry
        },
      }
    ];

    const store = mockStore({ diary: {} });
    return store.dispatch(updateDiary(id, entry)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('should fail to update a diary', () => {
    mock.onPut(`${BASE_URL}/entries/${id}`).reply(400, {
      entry
    });

    const mockedActions = [
      {
        type: 'UPDATE_DIARY_LOADING',
        payload: true,
      },
      {
        type: 'UPDATE_DIARY_LOADING',
        payload: false
      },
      {
        type: 'UPDATE_DIARY_FAILING',
        payload: {
          error: undefined,
          status: true
        },
      }
    ];

    const store = mockStore({ diary: {} });
    return store.dispatch(updateDiary(id, entry)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    })
      .catch(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });

  it('should delete a diary', () => {
    mock.onDelete(`${BASE_URL}/entries/${id}`).reply(200, {
      entry
    });

    const mockedActions = [
      {
        type: 'DELETE_DIARY_LOADING',
        payload: true,
      },
      {
        type: 'DELETE_DIARY_LOADING',
        payload: false
      },
      {
        type: 'DELETE_DIARY_SUCCESS',
        payload: {
          entry
        },
      }
    ];

    const store = mockStore({ diary: {} });
    return store.dispatch(deleteDiary(id)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('should fail to delete a diary', () => {
    mock.onDelete(`${BASE_URL}/entries/${id}`).reply(400, {
      entry
    });

    const mockedActions = [
      {
        type: 'DELETE_DIARY_LOADING',
        payload: true,
      },
      {
        type: 'DELETE_DIARY_LOADING',
        payload: false
      },
      {
        type: 'DELETE_DIARY_FAILING',
        payload: {
          error: undefined,
          status: true
        },
      }
    ];

    const store = mockStore({ diary: {} });
    return store.dispatch(deleteDiary(id)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    })
      .catch(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
