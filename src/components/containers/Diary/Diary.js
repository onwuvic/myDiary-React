import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Section from '../../common/Section/Section';
import { getOneDiaries } from '../../../actions/diaryAction';
import SingleDiary from '../../common/SingleDiary/SingleDiary';

/**
 * @class Diary
 * @extends {Component}
 */
class Diary extends Component {
  /**
   * @returns {func} diary
   * @memberof Home
   */
  componentDidMount() {
    this.props.getOneDiaries(this.props.match.params.id);
  }

  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Diary
   */
  render() {
    return (
      <Section styles="container-sm single-page">
        <SingleDiary diary={this.props.diary.diary} />
      </Section>
    );
  }
}

Diary.propTypes = {
  getOneDiaries: PropTypes.func,
  diary: PropTypes.object,
  match: PropTypes.object
};

const mapStateToProps = state => ({
  diary: state.diary
});

export default connect(mapStateToProps, { getOneDiaries })(Diary);
