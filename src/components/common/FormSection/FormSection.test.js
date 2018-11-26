// import React from 'react';
// import { shallow } from 'enzyme';
// import FormSection from './FormSection';

// let component;

// beforeEach(() => {
//   component = shallow(<FormSection
//     authType="Login"
//     optionText="Don't have an account"
//     id="loginForm"
//     urlLink="/signup"
//     callToAction="Sign Up"
//   />);
// });

// afterEach(() => {
//   component.unmount();
// });

// it('should render without throwing an error', () => {
//   expect(component).toMatchSnapshot();
// });

// it('should have a section tag', () => {
//   expect(component.find('section').length).toEqual(1);
// });

// it('should have a h3 tag', () => {
//   expect(component.find('h3').length).toEqual(1);
// });

// it('should have a form tag', () => {
//   expect(component.find('form').length).toEqual(1);
// });

// it('should have a p tag', () => {
//   expect(component.find('p').length).toEqual(1);
// });

// it('should have a section with a className of form form-sm', () => {
//   expect(component.find('section').hasClass('form form-sm'));
// });

// it('should have a h3 with a className of font-weight-normal text-center', () => {
//   expect(component.find('h3').hasClass('font-weight-normal text-center'));
// });

// it('should have a p with a className of text-center', () => {
//   expect(component.find('p').hasClass('text-center'));
// });

// it('should have a props of authType that is an string', () => {
//   expect(typeof component.props().authType).toBe('string');
// });

// it('should have a props of optionText that is an string', () => {
//   expect(typeof component.props().optionText).toBe('string');
// });

// it('should have a props of id that is an string', () => {
//   expect(typeof component.props().id).toBe('string');
// });

// it('should have a props of urlLink that is an string', () => {
//   expect(typeof component.props().urlLink).toBe('string');
// });

// it('should have a props of callToAction that is a function', () => {
//   expect(typeof component.props().callToAction).toBe('string');
// });

// it('should have a h3 with a text of Login', () => {
//   expect(component.find('h3').text()).toEqual('Login');
// });
