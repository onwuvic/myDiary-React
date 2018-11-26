import React from 'react';
import { mount } from 'enzyme';
import Input from './Input';

let component;

beforeEach(() => {
  component = mount(<Input
    id="email"
    value="johndoe@gmail.com"
    placeholder="Email"
    type="email"
    onChange={() => {}}
    label="Email"
    required="required"
    styles="read-only"
    />);
});

afterEach(() => {
  component.unmount();
});

it('should render without throwing an error', () => {
  expect(component).toMatchSnapshot();
});

it('should have a div', () => {
  expect(component.find('div').length).toEqual(1);
});

it('should have a label tag', () => {
  expect(component.find('label').length).toEqual(1);
});

it('should have a input tag', () => {
  expect(component.find('input').length).toEqual(1);
});

it('should have a props of id that is an string', () => {
  expect(typeof component.props().id).toBe('string');
});

it('should have a props of value that is an string', () => {
  expect(typeof component.props().value).toBe('string');
});

it('should have a props of placeholder that is an string', () => {
  expect(typeof component.props().placeholder).toBe('string');
});

it('should have a props of type that is an string', () => {
  expect(typeof component.props().type).toBe('string');
});

it('should have a props of onChange that is a function', () => {
  expect(typeof component.props().onChange).toBe('function');
});

it('should have a label name', () => {
  expect(component.find('label').text()).toEqual('Email');
});

it('should have a label with a className of read-only', () => {
  expect(component.find('label').hasClass('read-only'));
});
