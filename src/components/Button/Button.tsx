import React from 'react';
import { FC } from 'react';
import styles from './style.module.scss';

// кнопка должна выполнять разные функции, не знал как правильно типизировать, и сделал необязательными эти функции
interface Button {
  text: string;
  color: string;
  getNewUsers?: () => void;
  getNewLink?: () => void;
  createUser?: () => void;
}

const Button: FC<Button> = ({ text, color, getNewUsers, getNewLink, createUser }) => {
  return (
    <button
      className={`${styles.btn} btn-${color}`}
      onClick={() => {
        if (getNewUsers && getNewLink) {
          getNewUsers();
          getNewLink();
        }

        if (createUser) {
          createUser();
        }
      }}
      type="button">
      {text}
    </button>
  );
};

export default Button;
