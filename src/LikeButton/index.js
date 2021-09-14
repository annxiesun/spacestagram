import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import HeartEmpty from '../Icons/HeartEmpty';
import HeartFilled from '../Icons/HeartFilled';

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
      {like ? <HeartFilled className={styles.icon} /> : <HeartEmpty className={styles.icon} />}
    </button>
  )
}