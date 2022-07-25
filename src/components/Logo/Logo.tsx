import React from 'react';
import styles from './style.module.scss';

import logo from './../../images/Logo.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;
