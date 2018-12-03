import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import formProps from './FormSectionMockProps';
import { FormSection } from '../index';

let component;

beforeEach(() => {
  component = mount(
    <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
      <FormSection { ...formProps }><p></p></FormSection>
    </MemoryRouter>
  );
});

afterEach(() => {
  component.unmount();
});

it('should render without throwing an error', () => {
  expect(component.find('section').length).toEqual(1);
});
