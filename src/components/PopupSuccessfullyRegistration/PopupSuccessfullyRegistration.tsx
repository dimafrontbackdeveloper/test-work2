import successImg from './../../images/success-image.png';
import styles from './style.module.scss';

const PopupSuccessfullyRegistration = () => (
  <div className={`${styles.popupSuccessfullyRegistered} ${'popup ta-c'}`}>
    <h2 className="title">User successfully registered</h2>
    <div className={styles.popupSuccessfullyRegistered__img}>
      <img src={successImg} alt="successfully registered" />
    </div>
  </div>
);

export default PopupSuccessfullyRegistration;
