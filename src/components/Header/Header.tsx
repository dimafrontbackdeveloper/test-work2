import React from 'react';
import styles from './style.module.scss';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={`${styles.header__row} ${`d-f jc-sb ai-c`} `}>
        <Logo />
        <div className={styles.header__buttons}>
          <Button text={'Users'} color={'yellow'} />
          <Button text={'Sign up'} color={'yellow'} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
