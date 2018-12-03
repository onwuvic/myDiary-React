import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../Home/Home';
import DiaryPage from '../Diary/Diary';
import HeaderHome from '../Header/Header';
import { Footer } from '../../common';
import SideBarPage from '../SideBar/SideBar';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import EditDiaryPage from '../EditDiary/EditDiary';
import CreateDiaryHome from '../CreateDiary/CreateDiary';
import Notification from '../Notification/Notification';

const NoFound = () => <h1 style={{ marginTop: '50px' }} className="text-center">No Page Found</h1>;

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
            <HeaderHome />
            <SideBarPage />
          </div>
        </header>
        <Switch>
          <Route path='/dashboard' exact component={HomePage} />
          <Route path='/dashboard/profile' component={Profile} />
          <Route path='/dashboard/diaries/:id' exact component={DiaryPage} />
          <Route path='/dashboard/settings' component={Settings} />
          <Route path='/dashboard/new-diary' component={CreateDiaryHome} />
          <Route path='/dashboard/diaries/:id/edit' component={EditDiaryPage} />
          <Route path='/dashboard/notifications' component={Notification} />
          <Route component={NoFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
