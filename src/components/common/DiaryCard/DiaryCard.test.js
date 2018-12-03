import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import diary from './mockStore';
import { DiaryCard } from '../index';

let component;

beforeEach(() => {
  component = mount(
    <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
      <DiaryCard diary={diary} />
    </MemoryRouter>
  );
});

afterEach(() => {
  component.unmount();
});

it('should have an article tag', () => {
  expect(component.find('article').length).toEqual(1);
});
