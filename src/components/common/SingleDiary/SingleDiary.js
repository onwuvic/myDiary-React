import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const SingleDiary = ({ diary }) => {
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
        <div className="view-single">
          <a href="#">Edit</a>
          <a href="#">Delete</a>
        </div>
        <i className="fa fa-ellipsis-v" id="more-information"></i>
      </div>
      <p className="paragraph">{diary.diary.body}</p>
    </article>
  );
};

SingleDiary.propTypes = {
  diary: PropTypes.object
};

const mapStateToProps = state => ({
  diary: state.diary
});

export default connect(mapStateToProps)(SingleDiary);
