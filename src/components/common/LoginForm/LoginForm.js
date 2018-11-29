import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '../index';

const LoginForm = ({
  states, handleChange, loading
}) => {
  const renderButton = () => {
    if (loading) {
      return (<p className="text-center">Loading...</p>);
    }

    return (
      <span>
        <Button type="submit" id="button" styles="btn btn-info">
          Login
        </Button>
      </span>
    );
  };

  return (
    <Fragment>
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

LoginForm.propTypes = {
  handleChange: PropTypes.func,
  loading: PropTypes.bool,
  states: PropTypes.object
};

export { LoginForm };
