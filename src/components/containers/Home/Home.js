import React, { Component } from 'react';

import { Section, Icon, ArticleCard } from '../../common';

/**
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Home
   */
  render() {
    return (
      <Section styles="container grid-layout">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <Icon />
      </Section>
    );
  }
}

export default Home;
