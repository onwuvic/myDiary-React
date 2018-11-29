import React, { Component } from 'react';

import Section from '../../common/Section/Section';

/**
 * @class Notification
 * @extends {Component}
 */
class Notification extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Notification
   */
  render() {
    return (
      <Section styles="container-sm single-page">
        <div>
          <div>
            <small className="card-date">4 July 2018</small>
            <p>Hi Victor, Dont forget to pen your thought down today.
            Keeping a journal is great for your mental health.</p>
          </div>
          <div className="divider"></div>

          <div>
            <small className="card-date">4 July 2018</small>
            <p>Hi Victor, Dont forget to pen your thought down today.
            Keeping a journal is great for your mental health.</p>
          </div>
          <div className="divider"></div>

          <div>
            <small className="card-date">4 July 2018</small>
            <p>Hi Victor, Dont forget to pen your thought down today.
            Keeping a journal is great for your mental health.</p>
          </div>
          <div className="divider"></div>
        </div>
      </Section>
    );
  }
}

export default Notification;
