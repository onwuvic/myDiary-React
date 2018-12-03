import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * @class Dashboard
 * @extends {Component}
 */
class SingleDiary extends Component {
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
   * @memberof SingleDiary
   */
  render() {
    const { diary } = this.props;
    if (diary.error) {
      return (
        <div>
          <h3 className="text-center">{diary.errorMessage}</h3>
        </div>
      );
    }
    return (
      <article>
        <h1 className="text-center">{diary.diary.title}</h1>
        <div className="card-single" id="more-content">
          <small className="card-date">Created {moment(diary.diary.created_at).format('ll')}</small>
          <div style={{ opacity: this.state.show ? '1' : '0' }} className="view-single">
            <Link to={`/dashboard/diaries/${diary.diary.id}/edit`}>Edit</Link>
            <Link to="#">Delete</Link>
          </div>
          <i className="fa fa-ellipsis-v" id="more-information" onClick={this.toggleOptions}></i>
        </div>
        <p className="paragraph">{diary.diary.body}</p>
      </article>
    );
  }
}

SingleDiary.propTypes = {
  diary: PropTypes.object
};

const mapStateToProps = state => ({
  diary: state.diary
});

export default connect(mapStateToProps)(SingleDiary);
