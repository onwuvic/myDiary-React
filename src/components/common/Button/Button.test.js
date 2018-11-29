import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';

let component;

beforeEach(() => {
  component = mount(<Button
    id="button"
    type="submit"
    onClick={() => { }}
    styles="btn btn-info">Save</Button>);
});

afterEach(() => {
  component.unmount();
});

it('should render without throwing an error', () => {
  expect(component).toMatchSnapshot();
});

it('should have a div', () => {
  expect(component.find('button').length).toEqual(1);
});

it('should have a props of type that is an string', () => {
  expect(typeof component.props().type).toBe('string');
});

it('should have a props of children that is a string', () => {
  expect(typeof component.props().children).toBe('string');
});

it('should have a label with a className of read-only', () => {
  expect(component.find('button').hasClass('btn btn-info'));
});
