import React from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '../index';

const LoginForm = ({ states, handleChange, handleSubmit }) => (
  <div>
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
    <Button type="submit" id="button" styles="btn btn-info" onClick={handleSubmit}>
      Login
    </Button>

  </div>
);

LoginForm.propTypes = {
  states: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export { LoginForm };
