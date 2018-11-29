import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { displaySideNav } from '../../../actions/eventListenerAction';

/**
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
  /**
   * @returns {func} - Constructor
   * @memberof Header
   */
  constructor() {
    super();

    this.openSideNav = this.openSideNav.bind(this);
  }

  /**
   * @returns {func} - Show Side Nav
   * @memberof Header
   */
  openSideNav() {
    this.props.displaySideNav();
  }

  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Header
   */
  render() {
    return (
      <Fragment>
        <div className="dropdown-menu">
          <span id="open-menu" className="pointer">
            <svg width="30" height="30" onClick={this.openSideNav}>
              <path d="M0,5 30,5" stroke="#000" strokeWidth="5" />
              <path d="M0,14 30,14" stroke="#000" strokeWidth="5" />
              <path d="M0,23 30,23" stroke="#000" strokeWidth="5" />
            </svg>
          </span>
        </div>
        <div className="navbar-brand">
          <a href="#/diary" className="h2">MyDiary</a>
        </div>
        <nav className="navbar-grid-equal">
          <span id="logout" className="pointer">
            <i className="fa fa-sign-out-alt fa-lg"></i> Logout
          </span>
        </nav>
      </Fragment>
    );
  }
}

Header.propTypes = {
  displaySideNav: PropTypes.func,
  active: PropTypes.bool
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(mapStateToProps, { displaySideNav })(Header);
