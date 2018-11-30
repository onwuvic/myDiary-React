import React from 'react';
import { Link } from 'react-router-dom';

const Icon = () => (
  <Link to="/dashboard/new-diary" className="btn-circle" title="Create New Diary">
    <i className="fa fa-plus fa-lg"></i>
  </Link>
);

export { Icon };
