import React from "react";
import PropTypes from 'prop-types';

export default function Fullscreen ({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-4v-5h-5v-4h9v9zm-9 15v-4h5v-5h4v9h-9zm-15-9h4v5h5v4h-9v-9zm9-15v4h-5v5h-4v-9h9z"/></svg>
  )
}

Fullscreen.propTypes = {
  className: PropTypes.string.isRequired
}