import React from 'react';
import PropTypes from 'prop-types';


const Button = ({
  type, children, styles
}) => (
  <button type={type} className={styles}>{children}</button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.string
};

export { Button };
