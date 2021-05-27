import React from 'react';
import spinner from '../../assets/711 (1).png';
import styles from '../app/App.css';

export default function Spinner() {
  return (
    <>
      <img className={styles.spinner} src={spinner} />
    </>
  );
}
