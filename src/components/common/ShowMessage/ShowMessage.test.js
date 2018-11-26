import React from 'react';
import { mount } from 'enzyme';

import ShowMessage from './ShowMessage';

let component;

beforeEach(() => {
  component = mount(<ShowMessage />);
});

afterEach(() => {
  component.unmount();
});

it('should render without throwing an error', () => {
  expect(component).toMatchSnapshot();
});

it('should have a div tag', () => {
  expect(component.find('div').length).toEqual(1);
});

it('should have a div with a className of text-center error', () => {
  expect(component.find('div').hasClass('text-center error'));
});
