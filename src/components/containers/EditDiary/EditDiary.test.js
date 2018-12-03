import React from 'react';
import { shallow } from 'enzyme';
import { EditDiary } from './EditDiary';

const mockEvent = {
  target: {
    id: { value: 'anytheing' },
  }
};

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
    const props = {
      diary,
      history: { push: jest.fn() },
      match: { params: { id: 1 } },
      getOneDiaries: jest.fn(),
      updateDiary: jest.fn(async () => true)
    };
    const wrapper = shallow(<EditDiary {...props} {...overrideProps} />);
    return { props, wrapper };
  };

  it('should render without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').length).toEqual(0);
  });

  it('should match snapshot', () => {
    const { wrapper } = setup();
    wrapper.instance().handleChange(mockEvent);
    wrapper.instance().handleSubmit({ preventDefault: jest.fn() });
  });
});
