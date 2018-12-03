import React from 'react';
import { shallow } from 'enzyme';
import { Diary } from './Diary';

const diary = {
  diary: {
    body: 'Today was a dream come true. ',
    created_at: '2018-08-16T10:19:09.246Z',
    id: 9,
    title: 'Trip To The Famous Lake',
    users_id: 8
  }
};

/* eslint-disable no-undef */
describe('Diary', () => {
  const setup = (overrideProps) => {
    const props = { diary, match: { params: { id: 1 } }, getOneDiaries: jest.fn() };
    const wrapper = shallow(<Diary {...props} {...overrideProps} />);
    return { props, wrapper };
  };

  it('should render without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Section').length).toEqual(0);
  });

  it('should render when no diary exist', () => {
    const { wrapper } = setup({ diary: { diary: {} } });
    expect(wrapper.find('Section').length).toEqual(0);
  });
});
