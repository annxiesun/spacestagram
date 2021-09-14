import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import HeartEmpty from '../Icons/HeartEmpty';
import HeartFilled from '../Icons/HeartFilled';

export default function Post({ apod }) {
  const {
    copyright,
    date,
    explanation,
    hdurl,
    media_type,
    service_version,
    title,
    url
  } = apod;

  const [like, setLike] = useState(false);
  const [showLink, setShowLink] = useState(false);

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

  const formatExplanation = (str) => {
    return str.substring(0, 80) + '...';
  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.gradientOverlay} />
        <button className={styles.likeButton} onClick={() => setLike((prev) => (!prev))}>
          {like ? <HeartFilled className={styles.icon}/> : <HeartEmpty className={styles.icon} />}
        </button>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{formatExplanation(explanation)}</p>
          {showLink && <a href={window.location.origin + '/photo?date=' + date}>{window.location.origin + '/photo?date=' + date}</a>}
        </div>
        <img src={url} className={styles.image} />
      </div>
    </div>
  )
}