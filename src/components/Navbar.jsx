import React from 'react';

import styles from '../styles/navbar.module.scss';
import { FaCartArrowDown } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <h1 className={styles.navContainer__navTitle}>UseReducer</h1>
      <div className={styles.navContainer__cartContainer}>
        <FaCartArrowDown className={styles.navContainer__cartContainer__cart} />
        <div className={styles.navContainer__cartContainer__badge}>0</div>
      </div>
    </div>
  );
};

export default Navbar;
