import React from "react";
import styles from './style.module.css';

export default function Spinner() {
  return (
    <div class={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
  )
}