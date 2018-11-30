import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { DiaryForm } from '../../common';
import Section from '../../common/Section/Section';
import { createDiary } from '../../../actions/diaryAction';

/**
 * @class CreateDiary
 * @extends {Component}
 */
class CreateDiary extends Component {
  /**
   * @description - This method runs first in the class
   * @returns {object} Login
   * @memberof Login
   */
  constructor() {
    super();

    this.initialState = {
      title: '',
      body: ''
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
    this.props.createDiary(this.state)
      .then((res) => {
        this.setState({ ...this.initialState });
        this.props.history.push('/dashboard');
      });
  }

  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof CreateDiary
   */
  render() {
    return (
      <Section styles="container">
        <DiaryForm
          state={this.state}
          handleChange={this.handleChange}
          onSubmit={this.handleSubmit}
          loading={this.props.diary.loading}
          message={this.props.diary} />
      </Section>
    );
  }
}

CreateDiary.propTypes = {
  diary: PropTypes.object,
  history: PropTypes.object,
  createDiary: PropTypes.func
};

const mapStateToProps = state => ({
  diary: state.diary
});

export default connect(mapStateToProps, { createDiary })(CreateDiary);
