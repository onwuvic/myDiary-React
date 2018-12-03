import React from 'react';
import { shallow } from 'enzyme';

import Settings from './Settings';

const setup = (overrideProps) => {
  const props = {};
  const wrapper = shallow(<Settings {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('should render without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper.find('form').length).toEqual(1);
});
