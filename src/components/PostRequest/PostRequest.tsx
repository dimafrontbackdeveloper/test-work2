import { useAppSelector } from '../../store/hooks/hooks';
import PopupSuccessfullyRegistration from '../PopupSuccessfullyRegistration/PopupSuccessfullyRegistration';
import Form from './components/Form';
import styles from './style.module.scss';

const PostRequest = () => {
  const isSuccessfullyRegistration = useAppSelector(
    (state) => state.homeReducer.isSuccessfullyRegistration,
  );

  return (
    <section className={styles.postRequest}>
      <div className="container">
        {isSuccessfullyRegistration ? (
          <PopupSuccessfullyRegistration />
        ) : (
          <>
            <h2 className="title">Working with POST request</h2>
            <Form />
          </>
        )}
      </div>
    </section>
  );
};

export default PostRequest;
