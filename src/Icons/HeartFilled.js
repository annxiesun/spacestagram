import React from "react";
import PropTypes from 'prop-types';

export default function HeartEmpty({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24"><path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" /></svg>
  )
}

HeartEmpty.propTypes = {
  className: PropTypes.object.isRequired
}