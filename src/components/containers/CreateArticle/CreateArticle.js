import React, { Component } from 'react';

import { Section, DiaryForm } from '../../common';

/**
 * @class CreateArticle
 * @extends {Component}
 */
class CreateArticle extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof CreateArticle
   */
  render() {
    return (
      <Section styles="container">
        <DiaryForm />
      </Section>
    );
  }
}

export default CreateArticle;
