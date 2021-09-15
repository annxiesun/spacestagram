import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import LikeButton from '../LikeButton';

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

  const formatExplanation = (str) => {
    return str.substring(0, 80) + '...';
  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.gradientOverlay} />
          <LikeButton className={styles.likeButton} date={date}/>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{formatExplanation(explanation)}</p>
        </div>
        <img src={url} className={styles.image} />
      </div>
    </div>
  )
}