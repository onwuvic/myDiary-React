import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Section = ({ styles, children, event }) => (
  <section style={{ marginLeft: event.active ? '250px' : '' }} className={styles}>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.string,
  event: PropTypes.object
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(mapStateToProps)(Section);
