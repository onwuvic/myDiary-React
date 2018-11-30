import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';

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
