import React from 'react';
import PropTypes from 'prop-types';


const DiaryCard = ({ diary }) => (
  <article className="card">
    <a href="#">
      <div className="card-body">
        <h5 className="card-title">{diary.title}</h5>
        <div className="card-more">
          <small className="card-date">Created {diary.created_at}</small>
          <div className="view-more">
            <a href="#">View</a>
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </div>
          <i className="fa fa-ellipsis-v" id="more-info"></i>
        </div>
        <p>{diary.body}</p>
      </div>
    </a>
  </article>
);

DiaryCard.propTypes = {
  diary: PropTypes.object
};

export { DiaryCard };
