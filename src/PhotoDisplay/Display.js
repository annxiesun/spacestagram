import React, { useEffect, useState } from "react";
import styles from './style.module.css';
import LikeButton from "../LikeButton";

export default function Display({ apod }) {
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

  return (
    <div>
      <img src={url} className={styles.image}/>
      <div className={styles.content}>
        <div>
          {title}
          <LikeButton date={date} />
        </div>
        <div>
          Share this photo!
          {window.location.origin + '/photo?date=' + date}
        </div>
      </div>
    </div>
  );
}