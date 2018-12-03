import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { Icon, DiaryCard } from '../../common';
import Section from '../../common/Section/Section';
import { getAllDiaries } from '../../../actions/diaryAction';

/**
 * @class Home
 * @extends {Component}
 */
export class Home extends Component {
  /**
   * @returns {func} diary
   * @memberof Home
   */
  componentDidMount() {
    this.props.getAllDiaries();
  }

  /**
   * @returns {func} diary
   * @memberof Home
   */
  renderDiaryList() {
    if (this.props.diary.diaries.length) {
      return this.props.diary.diaries.map(diary => <DiaryCard key={diary.id} diary={diary} />);
    }
    return (
      <div>
        <h3 className="text-center">You have no diary entry</h3>
        <h4 className="text-center">Get started by creating one!!!</h4>
      </div>
    );
  }

  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Home
   */
  render() {
    return (
      <Section styles="container grid-layout">
        {this.renderDiaryList()}
        <Icon />
      </Section>
    );
  }
}

Home.propTypes = {
  getAllDiaries: PropTypes.func,
  diary: PropTypes.object
};

const mapStateToProps = state => ({
  diary: state.diary
});

export default connect(mapStateToProps, { getAllDiaries })(Home);
