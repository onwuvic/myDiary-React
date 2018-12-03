import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from './SignUp';

const mockEvent = {
  target: {
    id: { value: 'anytheing' },
  }
};

const MockProps = {
  error: false,
  errorMessage: null,
  loading: false,
  success: false,
  diary: {},
  diaries: []
};

/* eslint-disable no-undef */
describe('Handle function call', () => {
  const setup = (overrideProps) => {
    const props = { ...MockProps, user: { loading: true }, signUpUser: jest.fn(async () => true) };
    const wrapper = shallow(<SignUp {...props} {...overrideProps} />);
    return { props, wrapper };
  };

  it('should match snapshot', () => {
    const { wrapper } = setup();
    wrapper.instance().handleChange(mockEvent);
    wrapper.instance().handleSubmit({ preventDefault: jest.fn() });
  });
});
