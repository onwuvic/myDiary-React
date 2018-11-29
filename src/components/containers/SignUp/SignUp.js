import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { signUpUser } from '../../../actions/authAction';
import { FormSection, Footer, SignupForm } from '../../common';

/**
 * @class App
 * @extends {Component}
 */
class SignUp extends Component {
  /**
   * @description - This method runs first in the class
   * @returns {object} SignUp
   * @memberof SignUp
   */
  constructor() {
    super();

    this.initialState = {
      firstname: '',
      lastname: '',
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
   * @memberof SignUp
   */
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  /**
   * @description - This method submit the input data
   * @param {object} event
   * @returns {object} void
   * @memberof SignUp
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.signUpUser(this.state)
      .then((res) => {
        this.setState({ ...this.initialState });
        this.props.history.push('/dashboard');
      });
  }

  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof SignUp
   */
  render() {
    return (
      <div className="container-flex">
        <FormSection
          authType="Sign Up"
          id="signupForm"
          optionText="Already have an account"
          urlLink="/"
          callToAction="Login"
          message={this.props.user}
          onSubmit={this.handleSubmit}
          >
          <SignupForm
            states={this.state}
            loading={this.props.user.loading}
            handleChange={this.handleChange}/>
        </FormSection>
        <Footer />
      </div>
    );
  }
}

SignUp.propTypes = {
  history: PropTypes.object,
  signUpUser: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { signUpUser })(SignUp);
