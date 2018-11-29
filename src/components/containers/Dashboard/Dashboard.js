import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Home from '../Home/Home';
import Header from '../Header/Header';
import { Footer } from '../../common';
import SideBar from '../SideBar/SideBar';
import Article from '../Article/Article';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import Notification from '../Notification/Notification';
import CreateArticle from '../CreateArticle/CreateArticle';

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
          <Route path='/dashboard/articles' component={Article} />
          <Route path='/dashboard/settings' component={Settings} />
          <Route path='/dashboard/new-article' component={CreateArticle} />
          <Route path='/dashboard/notifications' component={Notification} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
