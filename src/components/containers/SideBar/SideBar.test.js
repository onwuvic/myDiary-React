import React from 'react';
import { shallow } from 'enzyme';
import { SideBar } from './SideBar';

/* eslint-disable no-undef */
describe('Handle function call', () => {
  const setup = (overrideProps) => {
    const props = { event: { active: false }, user: { user: { firstname: 'John', lastname: 'Doe' } }, hideSideNav: jest.fn() };
    const wrapper = shallow(<SideBar {...props} {...overrideProps} />);
    return { props, wrapper };
  };

  it('should match snapshot', () => {
    const { wrapper } = setup();
    wrapper.instance().closeSideNav();
  });
});
