import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '../index';

const SignupForm = ({
  states, handleChange, loading
}) => {
  const renderButton = () => {
    if (loading) {
      return (<p className="text-center">Loading...</p>);
    }

    return (
      <Button type="submit" styles="btn btn-info">
        Sign Up
      </Button>
    );
  };

  return (
    <Fragment>
      <Input
        label="First Name"
        placeholder="First Name"
        styles="read-only"
        type="text"
        id="firstname"
        value={states.firstname}
        onChange={handleChange}
        required
      />
      <Input
        label="Last Name"
        placeholder="Last Name"
        styles="read-only"
        type="text"
        id="lastname"
        value={states.lastname}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        placeholder="Email"
        styles="read-only"
        type="email"
        id="email"
        value={states.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Password"
        placeholder="Password"
        styles="read-only"
        type="password"
        id="password"
        value={states.password}
        onChange={handleChange}
        required
      />
      {renderButton()}
    </Fragment>
  );
};

SignupForm.propTypes = {
  handleChange: PropTypes.func,
  loading: PropTypes.bool,
  states: PropTypes.object,
};

export { SignupForm };
