import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { hideSideNav } from '../../../actions/eventListenerAction';
import avatar from '../../../assests/images/avatar.png';

/**
 * @class SideBar
 * @extends {Component}
 */
export class SideBar extends Component {
  /**
   * @returns {func} - Constructor
   * @memberof Header
   */
  constructor() {
    super();

    this.closeSideNav = this.closeSideNav.bind(this);
  }

  /**
   * @returns {func} - Show Side Nav
   * @memberof Header
   */
  closeSideNav() {
    this.props.hideSideNav();
  }

  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof SideBar
   */
  render() {
    const { active } = this.props.event;

    return (
      <nav style={{ width: active ? '250px' : '' }} className="side-navbar" id="side-menu">
        <div className="navbar-brand navbar-grid-menu">
          <h2>MyDiary</h2>
          <span className="btn-close pointer" id="close-menu" onClick={this.closeSideNav} >
            &times;
          </span>
        </div>
        <div className="divider"></div>
        <Link to="/dashboard/profile" className="profile-avatar">
          <img src={avatar} className="img-circle" alt="profile picture" />
          <span id="user-detail"><strong>{this.props.user.user.firstname} {this.props.user.user.lastname}</strong></span>
        </Link>
        <div className="divider"></div>
        <Link to="/dashboard/new-diary">
          <i className="fa fa-plus fa-lg"></i> Create New Diary
        </Link>
        <Link to="/dashboard">
          <i className="fa fa-atlas fa-lg"></i> All Diaries
        </Link>
        <div className="divider"></div>
        <Link to="/dashboard/notifications">
          <i className="fa fa-bell fa-lg"></i>
          <span className="notify-count notify-available">9</span> Notifications
        </Link>
        <Link to="/dashboard/settings">
          <i className="fa fa-cog fa-lg"></i> Settings
        </Link>
      </nav>
    );
  }
}

SideBar.propTypes = {
  event: PropTypes.object,
  hideSideNav: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  event: state.event,
  user: state.user
});

export default connect(mapStateToProps, { hideSideNav })(SideBar);
