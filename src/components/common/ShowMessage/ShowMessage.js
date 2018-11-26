import React from 'react';
import PropTypes from 'prop-types';

const ShowMessage = ({ message }) => {
  let show;
  if (message.error) {
    show = 'show-error';
  } else {
    show = 'hide-error';
  }
  return (<div id="error-message" className={`text-center error ${show}`}>{message.errorMessage}</div>);
};

ShowMessage.propTypes = {
  message: PropTypes.object,
};

export { ShowMessage };
