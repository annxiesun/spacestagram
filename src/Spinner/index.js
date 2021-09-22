import React from "react";
import PropTypes from 'prop-types';
import styles from './style.module.css';

export default function Spinner({ className }) {
  return (
    <div className={`${styles.ldsRing} ${className}`}><div></div><div></div><div></div><div></div></div>
  )
}


Spinner.propTypes = {
  className: PropTypes.string
}

Spinner.defaultProps = {
  className: ''
}