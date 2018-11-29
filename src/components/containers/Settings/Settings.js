import React, { Component } from 'react';

import Section from '../../common/Section/Section';

/**
 * @class Settings
 * @extends {Component}
 */
class Settings extends Component {
  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Settings
   */
  render() {
    return (
      <Section styles="container-sm single-page">
        <div>
          <h4>General Settings</h4>
          <div className="divider"></div>
          <form>
            <div className="form-group form-horizontal">
              <label htmlFor="reminder">Set Reminder</label>
              <input type="checkbox" id="reminder" />
            </div>
            <button type="submit" id="button" className="btn btn-info">Set Reminder</button>
          </form>
        </div>
      </Section>
    );
  }
}

export default Settings;
