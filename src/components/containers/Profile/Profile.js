import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    const { user } = this.props.user;
    return (
      <Section styles="container-sm single-page">
        <div>
          <h4>Diary</h4>
          <div className="divider"></div>
          <div className="list">
            <p><strong>Total Number of User Diary</strong></p>
            <p><strong className="entry-count">{this.props.diary.diaries.length}</strong></p>
          </div>
          <h4>User Profile</h4>
          <div className="divider"></div>
          <div className="list">
            <p>First Name</p>
            <p>{user.firstname}</p>
          </div>
          <div className="list">
            <p>Last Name</p>
            <p>{user.lastname}</p>
          </div>
          <div className="list">
            <p>Username</p>
            <p>-----</p>
          </div>
          <div className="list">
            <p>Email Address</p>
            <p>{user.email}</p>
          </div>
        </div>
      </Section>
    );
  }
}

Profile.propTypes = {
  diary: PropTypes.object,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  diary: state.diary,
  user: state.user
});

export default connect(mapStateToProps)(Profile);
