import React from 'react';
import { mount } from 'enzyme';

import Footer from './Footer';

let component;

beforeEach(() => {
  component = mount(<Footer />);
});

afterEach(() => {
  component.unmount();
});

it('should render without throwing an error', () => {
  expect(component).toMatchSnapshot();
});

it('should have a footer', () => {
  expect(component.find('footer').length).toEqual(1);
});

it('should have a p', () => {
  expect(component.find('p').length).toEqual(1);
});

it('should have a content', () => {
  expect(component.find('p').text()).toEqual('MyDiary © 2018.');
});
