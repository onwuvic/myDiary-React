import React from 'react';
import PropTypes from 'prop-types';


const Button = ({
  type, children, styles, id, onClick
}) => (
  <button type={type} id={id} className={styles} onClick={onClick}>{children}</button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func
};

export { Button };
