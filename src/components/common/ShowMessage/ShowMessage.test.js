import React from 'react';
import { shallow } from 'enzyme';

import { ShowMessage } from '../index';

const setup = (overrideProps) => {
  const props = {
    message: {
      error: true,
      errorMessage: 'successfully error'
    }
  };
  const wrapper = shallow(<ShowMessage {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('should have a form', () => {
  const { wrapper } = setup();
  expect(wrapper.find('div').length).toEqual(1);
});

it('it should return just p', () => {
  const { wrapper } = setup({ message: { error: false } });
  expect(wrapper.find('div').length).toEqual(1);
});
