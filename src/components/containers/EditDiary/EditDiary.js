import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { DiaryForm } from '../../common';
import Section from '../../common/Section/Section';
import { updateDiary, getOneDiaries } from '../../../actions/diaryAction';

/**
 * @class EditDiary
 * @extends {Component}
 */
export class EditDiary extends Component {
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
   * @returns {func} diary
   * @memberof Home
   */
  componentDidMount() {
    this.props.getOneDiaries(this.props.match.params.id);
  }

  /**
  * @description - This method runs whenever the redux state changes
  * @returns {object} state
  * @param {object} props
  * @param {object} state
  */
  static getDerivedStateFromProps(props, state) {
    if (state.title && state.body) return null;
    const { title, body } = props.diary.diary;
    return { title, body };
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
    const { id } = this.props.diary.diary;
    this.props.updateDiary(id, this.state)
      .then((res) => {
        this.setState({ ...this.initialState });
        this.props.history.push('/dashboard');
      });
  }

  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof EditDiary
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

EditDiary.propTypes = {
  diary: PropTypes.object,
  getOneDiaries: PropTypes.func,
  history: PropTypes.object,
  match: PropTypes.object,
  updateDiary: PropTypes.func
};

const mapStateToProps = state => ({
  diary: state.diary
});

export default connect(mapStateToProps, { updateDiary, getOneDiaries })(EditDiary);
