import React, { useEffect, useState } from 'react';
import HeartEmpty from '../Icons/HeartEmpty';
import Home from '../Icons/Home';
import {
  Link,
} from "react-router-dom";
import styles from './style.module.css';

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <img className={styles.logo} src={'/spacestagram_logo.svg'} />
        <h2 className={styles.title}>Spacestagram</h2>
      </div>
      <div>
        <Link to="/"><Home className={styles.icon} /></Link>
        <Link to="/liked"><HeartEmpty className={styles.icon} /></Link>
      </div>
    </div>
  )
}