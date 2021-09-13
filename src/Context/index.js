import React, { useContext, useEffect, useState, useRef } from 'react';
import { PropTypes } from 'prop-types';

const State = React.createContext();

export default function useStateContext() {
  return useContext(State);
}

export const Provider = ({ children }) => {
  const [bannerStyle, setLayout] = useState('hi');

  const value = {
    bannerStyle,
    setLayout
  };

  return (
    <State.Provider value={value}>
      {children}
    </State.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
