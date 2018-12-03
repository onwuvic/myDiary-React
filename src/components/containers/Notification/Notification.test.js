import React from 'react';
import { shallow } from 'enzyme';

import Notification from './Notification';

const setup = (overrideProps) => {
  const props = {};
  const wrapper = shallow(<Notification {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('should render without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper.find('div').length).toEqual(7);
});
