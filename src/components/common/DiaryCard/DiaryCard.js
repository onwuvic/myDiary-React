import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * @class Dashboard
 * @extends {Component}
 */
class DiaryCard extends Component {
  /**
   * @returns {func} diary
   * @memberof DiaryCard
   */
  constructor() {
    super();

    this.state = {
      show: false
    };

    this.toggleOptions = this.toggleOptions.bind(this);
  }

  /**
   * @returns {func} diary
   * @memberof DiaryCard
   */
  toggleOptions() {
    this.setState({ show: !this.state.show });
  }

  /**
   * @description - This method renders the jsx for this component
   * @returns {jsx} - jsx
   * @memberof Dashboard
   */
  render() {
    const { diary } = this.props;
    return (
      <article className="card">
        <div className="card-body">
          <h5 className="card-title">{diary.title}</h5>
          <div className="card-more">
            <small className="card-date">Created {moment(diary.created_at).format('ll')}</small>
            <div style={{ opacity: this.state.show ? '1' : '0' }} className="view-more">
              <Link to={`/dashboard/diaries/${diary.id}`}>View</Link>
              <Link to={`/dashboard/diaries/${diary.id}/edit`}>Edit</Link>
              <Link to={`/dashboard/diaries/${diary.id}/delete`}>Delete</Link>
            </div>
          <i className="fa fa-ellipsis-v" id="more-info" onClick={this.toggleOptions}></i>
          </div>
          <p>{`${diary.body.substr(0, 150)}...`}</p>
        </div>
      </article>
    );
  }
}

DiaryCard.propTypes = {
  diary: PropTypes.object
};

export { DiaryCard };
