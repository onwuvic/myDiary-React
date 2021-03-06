import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ShowMessage } from '../index';

const FormSection = ({
  authType, children, optionText, callToAction, urlLink, message, onSubmit
}) => (
  <section className="form form-sm">
    <h3 className="font-weight-normal text-center">{authType}</h3>
    <ShowMessage message={message} />
    <form onSubmit={onSubmit}>
      {children}
    </form>
    <p className="text-center"> {optionText}  <Link to={urlLink} className="login-color">{callToAction}</Link></p>
  </section>
);

FormSection.propTypes = {
  authType: PropTypes.string,
  children: PropTypes.node,
  message: PropTypes.object,
  optionText: PropTypes.string,
  onSubmit: PropTypes.func,
  urlLink: PropTypes.string,
  callToAction: PropTypes.string
};

export { FormSection };
