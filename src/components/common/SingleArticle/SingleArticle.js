import React from 'react';


const SingleArticle = () => (
  <article>
    <h1 className="text-center">I Went Blank</h1>
    <div className="card-single" id="more-content">
      <small className="card-date">Created 5 July 201</small>
      <div className="view-single">
        <a href="#">Edit</a>
        <a href="#">Delete</a>
      </div>
      <i className="fa fa-ellipsis-v" id="more-information"></i>
    </div>
    <p className="paragraph">
      Few days to this my famous speech. Having prepared such much not
      because I wanted to impressed the whole school or because I want to inspire the student.
      I did it because I wanted to impress her. We met when
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Molestias modi nemo itaque perferendis sapiente
      atque ad officiis, incidunt cupiditate veritatis beatae voluptas rerum vero. Molestias, non?
      Odio eligendi dolor facere.
    </p>
  </article>
);

export { SingleArticle };
