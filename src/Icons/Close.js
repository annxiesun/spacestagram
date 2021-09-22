import React from "react";
import PropTypes from 'prop-types';

export default function Close({ className }) {
  return (
    <svg className={className} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
  )
}

Close.propTypes = {
  className: PropTypes.string.isRequired
}