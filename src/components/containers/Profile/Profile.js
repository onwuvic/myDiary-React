import React, { Component } from 'react';

import Section from '../../common/Section/Section';

/**
 * @class Profile
 * @extends {Component}
 */
class Profile extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Profile
   */
  render() {
    return (
      <Section styles="container-sm single-page">
        <div>
          <h4>Diary</h4>
          <div className="divider"></div>
          <div className="list">
            <p><strong>Total Number of User Diary</strong></p>
            <p><strong className="entry-count">6</strong></p>
          </div>
          <h4>User Profile</h4>
          <div className="divider"></div>
          <div className="list">
            <p>First Name</p>
            <p>John</p>
          </div>
          <div className="list">
            <p>Last Name</p>
            <p>Doe</p>
          </div>
          <div className="list">
            <p>Username</p>
            <p>-----</p>
          </div>
          <div className="list">
            <p>Email Address</p>
            <p>johndoe@example.com</p>
          </div>
        </div>
      </Section>
    );
  }
}

export default Profile;
