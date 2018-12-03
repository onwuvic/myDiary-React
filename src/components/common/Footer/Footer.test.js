import React from 'react';
import { mount } from 'enzyme';

import { Footer } from '../index';

let component;

beforeEach(() => {
  component = mount(<Footer />);
});

afterEach(() => {
  component.unmount();
});

it('should have a footer tag', () => {
  expect(component.find('footer').length).toEqual(1);
});

it('should have a p tag', () => {
  expect(component.find('p').length).toEqual(1);
});

it('should have a footer with a className of footer', () => {
  expect(component.find('footer').hasClass('footer'));
});

it('should have a p tag that contains', () => {
  expect(component.find('p').text()).toEqual('MyDiary © 2018.');
});
