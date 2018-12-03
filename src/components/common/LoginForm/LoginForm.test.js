import React from 'react';
import { shallow } from 'enzyme';

import { LoginForm } from '../index';
import LoginFormMockProps from './LoginFormMockProps';

const setup = (overrideProps) => {
  const props = LoginFormMockProps;
  const wrapper = shallow(<LoginForm {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('should have a form', () => {
  const { wrapper } = setup();
  expect(wrapper.find('Input').length).toEqual(2);
});

it('it should return just p', () => {
  const { wrapper } = setup({ loading: false });
  expect(wrapper.find('Input').length).toEqual(2);
});
