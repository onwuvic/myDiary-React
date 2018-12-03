import React from 'react';
import { shallow } from 'enzyme';

import { SignupForm } from '../index';
import SignupFormMockProps from './SignupFormMockProps';

const setup = (overrideProps) => {
  const props = SignupFormMockProps;
  const wrapper = shallow(<SignupForm {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('should render without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper.find('Input').length).toEqual(4);
});

it('it should return button', () => {
  const { wrapper } = setup({ loading: false });
  expect(wrapper.find('Input').length).toEqual(4);
});
