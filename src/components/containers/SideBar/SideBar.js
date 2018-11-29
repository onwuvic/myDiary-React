import React, { Component } from 'react';

/**
 * @class SideBar
 * @extends {Component}
 */
class SideBar extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof SideBar
   */
  render() {
    return (
      <nav className="side-navbar" id="side-menu">
        <div className="navbar-brand navbar-grid-menu">
          <h2>MyDiary</h2>
          <span className="btn-close pointer" id="close-menu">
            &times;
          </span>
        </div>
        <div className="divider"></div>
        <a href="#/profile" className="profile-avatar">
          <img src="image/avatar.png" className="img-circle" alt="profile picture" />
          <span id="user-detail"><strong>Jane Doe</strong></span>
        </a>
        <div className="divider"></div>
        <a href="#/new">
          <i className="fa fa-plus fa-lg"></i>
          Create New Diary
        </a>
        <a href="#/diary">
          <i className="fa fa-atlas fa-lg"></i>
          All Diaries
        </a>
        <div className="divider"></div>
        <a href="#/notification">
          <i className="fa fa-bell fa-lg"></i>
          <span className="notify-count notify-available">9</span>
          Notifications
        </a>
        <a href="#/settings">
          <i className="fa fa-cog fa-lg"></i>
          Settings
        </a>
      </nav>
    );
  }
}

export default SideBar;
