import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

const diary = {
  diaries: [
    {
      body: 'Today was a dream come true. ',
      created_at: '2018-08-16T10:19:09.246Z',
      id: 9,
      title: 'Trip To The Famous Lake',
      users_id: 8
    },
    {
      body: 'Today was a dream come true. ',
      created_at: '2018-08-16T10:19:09.246Z',
      id: 19,
      title: 'Trip To The Famous Lake',
      users_id: 18
    }
  ]
};

/* eslint-disable no-undef */
describe('Home', () => {
  const setup = (overrideProps) => {
    const props = { diary, getAllDiaries: jest.fn() };
    const wrapper = shallow(<Home {...props} {...overrideProps} />);
    return { props, wrapper };
  };

  it('should render without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').length).toEqual(0);
  });

  it('should render when no diary exist', () => {
    const { wrapper } = setup({ diary: { diaries: [] } });
    expect(wrapper.find('div').length).toEqual(1);
  });
});
