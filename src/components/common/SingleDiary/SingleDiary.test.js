import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Root from '../../../Root';
import SingleDiary from './SingleDiary';

let component;

describe('SingleDiary Test', () => {
  beforeEach(() => {
    const initialState = {
      diary: {
        diary: {
          body: 'Today was a dream come true.',
          created_at: '2018-08-16T10:19:09.246Z',
          id: 9,
          title: 'Trip To The Famous Lake',
          users_id: 8
        },
        error: true,
        errorMessage: 'It did not work'
      }
    };
    component = mount(
      <Root {...initialState}>
        <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
          <SingleDiary />
        </MemoryRouter>
      </Root>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render without throwing an error', () => {
    expect(component.find('article').length).toEqual(1);
  });
});
