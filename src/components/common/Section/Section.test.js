import React from 'react';
import { mount } from 'enzyme';

import Root from '../../../Root';

import Section from './Section';

let component;

beforeEach(() => {
  const initialState = {
    event: {
      active: true
    }
  };
  component = mount(
    <Root {...initialState}>
      <Section>
        <p>You</p>
      </Section>
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});

it('should render without throwing an error', () => {
  expect(component.find('section').length).toEqual(1);
});
