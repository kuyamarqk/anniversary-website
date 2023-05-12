import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="#home">
            <p className={styles.navLink}>Home</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#timeline">
            <p className={styles.navLink}>Timeline</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#memories">
            <p className={styles.navLink}>Memories</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#message">
            <p className={styles.navLink}>Message</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
