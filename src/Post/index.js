import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import LikeButton from '../LikeButton';
import Fade from 'react-reveal/Fade';
import Fullscreen from '../Icons/Fullscreen';
import Display from '../PhotoDisplay/Display';

export default function Post({ apod }) {
  const {
    date,
    explanation,
    title,
    url
  } = apod;


  const formatExplanation = (str) => {
    return str.substring(0, 70) + '...';
  }

  const [fullscreen, setFullscreen] = useState(false);

  const setScreen = (fullscreen) => {
    if (fullscreen) {
      setFullscreen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setFullscreen(false);
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <>
      {fullscreen && <Display apod={apod} closeDisplay={() => setScreen(false)}/>}
      <Fade bottom distance="70px">
        <div className={styles.container}>
          <div className={styles.gradientOverlay} />
          <LikeButton className={styles.likeButton} date={date} />
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h3>{title}</h3>
              <p className={styles.date}>{date}</p>
              <p>{formatExplanation(explanation)}</p>
            </div>
            <button className={styles.iconButton} onClick={() => setScreen(true)}>
              <Fullscreen className={styles.fullscreen} />
            </button>
          </div>
          <img alt={title} src={url} className={styles.image} />
        </div>
      </Fade>
    </>
  )
}

Post.propTypes = {
  apod: PropTypes.object.isRequired,
}