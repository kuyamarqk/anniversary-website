import React from 'react';
import styles from '../../styles/HomeComponent.module.css';

const HomeComponent = () => {
  return (
    <section className={styles.homeSection} id="home">
      <div className={styles.container}>
        <h1 className={styles.title}>Happy 14th Anniversary!</h1>
        <p className={styles.subtitle}>Celebrating our journey of love and togetherness</p>
      </div>
    </section>
  );
};

export default HomeComponent;
