import { FC } from 'react';
import styles from './style.module.scss';

interface Column {
  name: string;
  position: string;
  email: string;
  phoneNumber: string;
  photo: string;
}

const Column: FC<Column> = ({ name, position, email, phoneNumber, photo }) => {
  return (
    <div className={styles.getRequest__column}>
      <p className="avatar">
        <img src={photo} alt="avatar" />
      </p>
      <p>{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
    </div>
  );
};

export default Column;
