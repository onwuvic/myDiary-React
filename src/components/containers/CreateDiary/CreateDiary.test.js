import React from 'react';
import { mount, shallow } from 'enzyme';

import Root from '../../../Root';
import CreateDiaryConnect, { CreateDiary } from './CreateDiary';
import CreateDiaryMockProps from './CreateDiaryMockProps';

let component;
const mockEvent = {
  target: {
    id: { value: 'anytheing' },
  }
};
describe('CreateDiary', () => {
  beforeEach(() => {
    const initialState = {
    };
    component = mount(
      <Root {...initialState}>
        <CreateDiaryConnect />
      </Root>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render without throwing an error', () => {
    expect(component.find('DiaryForm').length).toEqual(1);
  });
});

/* eslint-disable no-undef */
describe('Handle function call', () => {
  const setup = (overrideProps) => {
    const props = { ...CreateDiaryMockProps, createDiary: jest.fn(async () => true) };
    const wrapper = shallow(<CreateDiary {...props} {...overrideProps} />);
    return { props, wrapper };
  };

  it('should match snapshot', () => {
    const { wrapper } = setup();
    wrapper.instance().handleChange(mockEvent);
    wrapper.instance().handleSubmit({ preventDefault: jest.fn() });
  });
});
