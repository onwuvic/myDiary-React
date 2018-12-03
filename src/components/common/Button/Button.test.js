import React from 'react';
import { mount } from 'enzyme';

import { Button } from '../index';

let component;

beforeEach(() => {
  component = mount(<Button
    type="submit"
    styles="btn btn-info">Save</Button>);
});

afterEach(() => {
  component.unmount();
});

it('should have a button', () => {
  expect(component.find('button').length).toEqual(1);
});

it('should have a props of type that is an string', () => {
  expect(typeof component.props().type).toBe('string');
});

it('should have a props of children that is a string', () => {
  expect(typeof component.props().children).toBe('string');
});

it('should have a button with a className of read-only', () => {
  expect(component.find('button').hasClass('btn btn-info'));
});
