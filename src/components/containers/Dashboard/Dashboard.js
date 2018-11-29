import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Diary from '../Diary/Diary';
import Header from '../Header/Header';
import { Footer } from '../../common';
import SideBar from '../SideBar/SideBar';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import CreateDiary from '../CreateDiary/CreateDiary';
import Notification from '../Notification/Notification';

/**
 * @class Dashboard
 * @extends {Component}
 */
class Dashboard extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Dashboard
   */
  render() {
    return (
      <div>
        <header>
          <div className="container container-fluid navbar-grid">
            <Header />
            <SideBar />
          </div>
        </header>
        <Switch>
          <Route path='/dashboard' exact component={Home} />
          <Route path='/dashboard/profile' component={Profile} />
          <Route path='/dashboard/diaries' component={Diary} />
          <Route path='/dashboard/settings' component={Settings} />
          <Route path='/dashboard/new-diary' component={CreateDiary} />
          <Route path='/dashboard/notifications' component={Notification} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
