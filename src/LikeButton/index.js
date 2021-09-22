import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import HeartEmpty from '../Icons/HeartEmpty';
import HeartFilled from '../Icons/HeartFilled';
import Zoom from 'react-reveal/Zoom';

export default function LikeButton({ className, date }) {
  const [like, setLike] = useState(false);

  useEffect(() => {
    const store = localStorage.getItem('store');
    if (store) {
      const photoMap = new Map(JSON.parse(store));
      if (photoMap.has(date)) {
        setLike(true);
      }
    }
  }, []);

  useEffect(() => {
    const store = localStorage.getItem('store');
    var photoMap;
    if (store) {
      photoMap = new Map(JSON.parse(store));
    } else {
      photoMap = new Map();
    }
    if (like) {
      photoMap.set(date, like);
    } else {
      photoMap.delete(date);
    }
    localStorage.setItem('store', JSON.stringify([...photoMap]));
  }, [like]);

  return (
    <button className={`${styles.likeButton} ${className}`} onClick={() => setLike((prev) => (!prev))}>
      <Zoom opposite when={like} duration={50} unmountOnExit mountOnEnter exit={false}>
        <HeartFilled className={styles.icon} />
      </Zoom>
      <Zoom opposite when={true} duration={50} unmountOnExit mountOnEnter exit={false}>
        <HeartEmpty className={styles.icon} />
      </Zoom>
    </button>
  )
}

LikeButton.propTypes = {
  className: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired
}