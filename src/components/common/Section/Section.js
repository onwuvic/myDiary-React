import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ styles, children }) => (
  <section id="main" className={styles}>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.string
};

export { Section };
