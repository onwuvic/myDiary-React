import React from 'react';


const ArticleCard = () => (
  <article className="card">
    <a href="#">
      <div className="card-body">
        <h5 className="card-title">My Time Management Crisis</h5>
        <div className="card-more">
          <small className="card-date">Created 12 July 2018</small>
          <div className="view-more">
            <a href="#">View</a>
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </div>
          <i className="fa fa-ellipsis-v" id="more-info"></i>
        </div>
        <p>Its been two weeks now, after so much consumption of time management
          books and online resources only
          to find out Im way worse than before. It all started like...
        </p>
      </div>
    </a>
  </article>
);

export { ArticleCard };
