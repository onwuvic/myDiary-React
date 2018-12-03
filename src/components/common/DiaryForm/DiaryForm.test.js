import React from 'react';
import { shallow } from 'enzyme';

import { DiaryForm } from '../index';
import diaryFormProps from './mockStore';

const setup = (overrideProps) => {
  const props = diaryFormProps;
  const wrapper = shallow(<DiaryForm {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('should have a form', () => {
  const { wrapper } = setup();
  expect(wrapper.find('form').length).toEqual(1);
});

it('it should return just p', () => {
  const { wrapper } = setup({ loading: false });
  expect(wrapper.find('form').length).toEqual(1);
});
