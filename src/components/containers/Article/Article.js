import React, { Component } from 'react';

import { Section, SingleArticle } from '../../common';

/**
 * @class Article
 * @extends {Component}
 */
class Article extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Article
   */
  render() {
    return (
      <Section styles="container-sm single-page">
        <SingleArticle />
      </Section>
    );
  }
}

export default Article;
