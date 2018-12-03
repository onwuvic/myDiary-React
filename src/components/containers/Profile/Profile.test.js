import React from 'react';
import { mount } from 'enzyme';

import Root from '../../../Root';
import Profile from './Profile';

let component;

describe('Profile', () => {
  beforeEach(() => {
    const initialState = {};
    component = mount(
      <Root {...initialState}>
          <Profile />
      </Root>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render without throwing an error', () => {
    expect(component.find('div').length).toEqual(8);
  });
});
