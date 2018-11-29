import React, { Component } from 'react';

import { DiaryForm } from '../../common';
import Section from '../../common/Section/Section';

/**
 * @class CreateDiary
 * @extends {Component}
 */
class CreateDiary extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof CreateDiary
   */
  render() {
    return (
      <Section styles="container">
        <DiaryForm />
      </Section>
    );
  }
}

export default CreateDiary;
