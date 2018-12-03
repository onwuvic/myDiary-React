import eventListenerReducer from '../eventListenerReducer';

import { OPEN_SIDENAV, CLOSE_SIDENAV } from '../../actionTypes';

const initialState = {
  active: false
};

describe('EventListener reducer', () => {
  it('should return the initial state', () => {
    expect(eventListenerReducer(undefined, {})).toEqual(initialState);
  });
  it('should return active true', () => {
    const state = eventListenerReducer([], { type: OPEN_SIDENAV, payload: { active: true } });
    expect(state).toEqual({ active: true });
  });
  it('should return active false', () => {
    const state = eventListenerReducer([], { type: CLOSE_SIDENAV, payload: { active: false } });
    expect(state).toEqual({ active: false });
  });
});
