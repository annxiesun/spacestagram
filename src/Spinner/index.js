import React from "react";
import styles from './style.module.css';

export default function Spinner({ className }) {
  return (
    <div className={`${styles.ldsRing} ${className}`}><div></div><div></div><div></div><div></div></div>
  )
}