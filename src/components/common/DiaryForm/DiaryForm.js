import React from 'react';
import PropTypes from 'prop-types';
import { ShowMessage } from '../index';


const DiaryForm = ({
  state, handleChange, onSubmit, message, loading
}) => {
  const renderButton = () => {
    if (loading) {
      return (<p className="text-center">Loading...</p>);
    }

    return (
      <span>
        <button type="submit" className="btn btn-info">Save</button>
      </span>
    );
  };

  return (
    <form className="form form-md" onSubmit={onSubmit}>
      <ShowMessage message={message} />
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Title" value={state.titlt} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="body">Dear Diary</label>
        <textarea rows="5" id="body" value={state.body} onChange={handleChange}></textarea>
      </div>
      {renderButton()}
    </form>
  );
};

DiaryForm.propTypes = {
  handleChange: PropTypes.func,
  loading: PropTypes.bool,
  message: PropTypes.object,
  onSubmit: PropTypes.func,
  state: PropTypes.object
};

export { DiaryForm };
