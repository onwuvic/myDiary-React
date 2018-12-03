import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { Icon } from '../index';

let component;

beforeEach(() => {
  component = mount(
    <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
      <Icon />
    </MemoryRouter>
  );
});

afterEach(() => {
  component.unmount();
});

it('should render without throwing an error', () => {
  expect(component.find('a').length).toEqual(1);
});
