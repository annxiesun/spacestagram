import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from './style.module.css';
import LikeButton from "../LikeButton";
import LinkIcon from "../Icons/Link";
import Fade from 'react-reveal/Fade';
import Close from "../Icons/Close";

export default function Display({ apod, closeDisplay }) {
  const {
    date,
    explanation,
    title,
    url
  } = apod;

  const link = window.location.origin + '/photo?date=' + date;
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    setCopied(true);
    navigator.clipboard.writeText(link);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <Fade bottom duration={100} distance="50px">
      <div className={styles.page}>
        {closeDisplay !== null && 
        <button className={styles.iconButton} onClick={() => closeDisplay()}>
          <Close className={styles.closeIcon} />
        </button>}
        <Fade in={copied} duration={200} distance="10px" bottom>
          <div className={styles.linkCopied}>
            <p>Copied Link!</p>
          </div>
        </Fade>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img alt={title} src={url} className={styles.image} />
          </div>
          <div className={styles.content}>
            <div className={styles.titleBox}>
              <div>
              <h1>{title}</h1>
              <p>{date}</p>
              </div>
              <div className={styles.likeContainer}>
                <LikeButton date={date} />
              </div>
            </div>
            <p className={styles.desc}>{explanation}</p>
            <div>
              <p><b>Share this photo!</b></p>
              <div className={styles.linkBox} onClick={() => copyLink()}>
                <LinkIcon className={styles.icon} />
                <p>{link}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

Display.propTypes = {
  apod: PropTypes.object.isRequired,
  closeDisplay: PropTypes.func
};

Display.defaultProps = {
  closeDisplay: null
}