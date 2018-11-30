import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const DiaryCard = ({ diary }) => (
  <article className="card">
    <Link to={`/dashboard/diaries/${diary.id}`}>
      <div className="card-body">
        <h5 className="card-title">{diary.title}</h5>
        <div className="card-more">
          <small className="card-date">Created {moment(diary.created_at).format('ll')}</small>
          <div className="view-more">
            <Link to={`/dashboard/diaries/${diary.id}`}>View</Link>
            <Link to={`/dashboard/diaries/${diary.id}/edit`}>Edit</Link>
            <Link to={`/dashboard/diaries/${diary.id}/delete`}>Delete</Link>
          </div>
          <i className="fa fa-ellipsis-v" id="more-info"></i>
        </div>
        <p>{`${diary.body.substr(0, 150)}...`}</p>
      </div>
    </Link>
  </article>
);

DiaryCard.propTypes = {
  diary: PropTypes.object
};

export { DiaryCard };
