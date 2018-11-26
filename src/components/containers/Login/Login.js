import React, { Component } from 'react';
import { FormSection, Footer, LoginForm } from '../../common';

/**
 * @class App
 * @extends {Component}
 */
class Login extends Component {
  /**
   * @description - This method runs first in the class
   * @returns {object} Login
   * @memberof Login
   */
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @description - This method sets the input values
   * @param {object} event
   * @returns {object} void
   * @memberof Login
   */
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  /**
   * @description - This method submit the input data
   * @param {object} event
   * @returns {object} void
   * @memberof Login
   */
  handleSubmit(event) {
    event.preventDefault();
  }

  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Login
   */
  render() {
    return (
      <div className="container-flex">
        <FormSection
          authType="Login"
          id="loginForm"
          optionText="Don't have an account"
          urlLink="/signup"
          callToAction="Sign Up"
        >
          <LoginForm
            states={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </FormSection>
        <Footer />
      </div>
    );
  }
}

export default Login;
