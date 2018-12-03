import React from 'react';
import { mount } from 'enzyme';

import { Input } from '../index';
import InputMockProps from './InputMockProps';

let component;

beforeEach(() => {
  component = mount(<Input { ...InputMockProps } />);
});

afterEach(() => {
  component.unmount();
});

it('should render without throwing an error', () => {
  expect(component.find('div').length).toEqual(1);
});
