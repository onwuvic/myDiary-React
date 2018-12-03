import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

const setup = (overrideProps) => {
  const props = {};
  const wrapper = shallow(
    <Dashboard {...props} {...overrideProps} />
  );
  return { props, wrapper };
};

it('should have a form', () => {
  const { wrapper } = setup();
  expect(wrapper.find('div').length).toEqual(2);
});
