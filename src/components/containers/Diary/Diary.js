import React, { Component } from 'react';

import { SingleDiary } from '../../common';
import Section from '../../common/Section/Section';

/**
 * @class Diary
 * @extends {Component}
 */
class Diary extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Diary
   */
  render() {
    return (
      <Section styles="container-sm single-page">
        <SingleDiary />
      </Section>
    );
  }
}

export default Diary;
