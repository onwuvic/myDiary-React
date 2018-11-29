import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { loginUser } from '../../../actions/authAction';
import { FormSection, Footer, LoginForm } from '../../common';

/**
 * @class Login
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

    this.initialState = {
      email: '',
      password: ''
    };

    this.state = { ...this.initialState };

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
    this.props.loginUser(this.state)
      .then((res) => {
        this.setState({ ...this.initialState });
        this.props.history.push('/dashboard');
      });
  }

  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Login
   */
  render() {
    return (
      <div className="container-flex">
        <header>
          <div>
              <div className="navbar-brand">
              <h2>MyDiary</h2>
            </div>
          </div>
        </header>
        <FormSection
          authType="Login"
          optionText="Don't have an account"
          urlLink="/signup"
          callToAction="Sign Up"
          onSubmit={this.handleSubmit}
          message={this.props.user}
        >
          <LoginForm
            states={this.state}
            loading={this.props.user.loading}
            handleChange={this.handleChange}
          />
        </FormSection>
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object,
  loginUser: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { loginUser })(Login);
