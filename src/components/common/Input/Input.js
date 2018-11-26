import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label, placeholder, type, id, required, styles, value, onChange
}) => (
  <div>
    <label htmlFor={id} className={styles}>{label}</label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required} />
  </div>
);

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  styles: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

export { Input };
