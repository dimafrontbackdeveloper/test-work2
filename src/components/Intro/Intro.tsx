import Button from '../Button/Button';
import styles from './style.module.scss';

const Popup = () => (
  <section className={`${styles.intro} ${'section'}`}>
    <div className={styles.intro__container}>
      <div className={styles.intro__content}>
        <div className="container">
          <div className={`${styles.intro__block} ${'ta-c'}`}>
            <h1 className="title">Test assignment for front-end developer</h1>
            <p>
              What defines a good front-end developer is one that has skilled knowledge of HTML,
              CSS, JS with a vast understanding of User design thinking as they'll be building web
              interfaces with accessibility in mind. They should also be excited to learn, as the
              world of Front-End Development keeps evolving.
            </p>
            <Button text="Sign up" color="yellow" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Popup;
