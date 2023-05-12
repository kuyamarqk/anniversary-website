import React from 'react';
import styles from '../../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Celebrating 14 Years of Love and Togetherness</h1>
        <p className={styles.subtitle}>Join us in commemorating this special milestone</p>
      </div>
    </section>
  );
};

export default Hero;
