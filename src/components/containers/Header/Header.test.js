import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Root from '../../../Root';
import HeaderMock, { Header } from './Header';

const HeaderMockProps = {
  event: {
    active: false
  }
};

let component;

describe('Header', () => {
  beforeEach(() => {
    const initialState = {};
    component = mount(
      <Root {...initialState}>
        <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
          <HeaderMock />
        </MemoryRouter>
      </Root>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render without throwing an error', () => {
    expect(component.find('div').length).toEqual(2);
  });
});

/* eslint-disable no-undef */
describe('Handle function call', () => {
  const setup = (overrideProps) => {
    const props = { ...HeaderMockProps, displaySideNav: jest.fn(), logOut: jest.fn() };
    const wrapper = shallow(<Header {...props} {...overrideProps} />);
    return { props, wrapper };
  };

  it('should match snapshot', () => {
    const { wrapper } = setup();
    wrapper.instance().openSideNav();
    wrapper.instance().signOut();
  });
});
