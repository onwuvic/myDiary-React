import { OPEN_SIDENAV, CLOSE_SIDENAV } from '../actionTypes';

export const displaySideNav = () => (
  { type: OPEN_SIDENAV, payload: { active: true } }
);

export const hideSideNav = () => (
  { type: CLOSE_SIDENAV, payload: { active: false } }
);
