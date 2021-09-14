import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation
} from "react-router-dom";
import { getSingle } from '../utils/getPhotos';
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
      <div className={styles.image}>
        <img src={url} />
      </div>
      <div className={styles.content}>
        <div>
          {title}
          <LikeButton date={date}/>
        </div>
      </div>
    </div>
  );
}