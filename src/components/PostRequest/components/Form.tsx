import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  actions,
  createNewUser,
  getPositions,
  getUsers,
} from '../../../store/actions/homeActions/homeActions';
import { useAppSelector } from '../../../store/hooks/hooks';
import { Position } from '../../../store/reducers/homeReducer/homeReducerTypes';
import Button from '../../Button/Button';
import styles from './style.module.scss';

const Form = () => {
  const dispatch = useDispatch();

  const positions = useAppSelector((state) => state.homeReducer.positions);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('+38');
  const [activePosition, setActivePosition] = useState<any>(1);
  const [formFile, setFormFile] = useState<any>();
  const [formFileName, setFormFileName] = useState<string>('Upload your photo');

  useEffect(() => {
    dispatch(getPositions());
  }, []);

  const changeFormInput = (e: any) => {
    setFormFile(e.target.files[0]);
    setFormFileName(e.target.files[0].name);
  };

  const changeInput = (e: any) => {
    // валидация для каждого инпута

    if (e.target.name === 'name') {
      if (e.currentTarget.value.length < 3 || e.currentTarget.value.length > 59) {
        e.currentTarget.className = styles.error;
      } else {
        e.currentTarget.className = '';
      }

      setName(e.currentTarget.value);
    }

    if (e.target.name === 'email') {
      if (
        e.currentTarget.value.length < 3 ||
        e.currentTarget.value.length > 99 ||
        !e.currentTarget.value.split('').includes('@') ||
        e.currentTarget.value
          .split('')
          .splice(e.currentTarget.value.length - 4)
          .join('') !== '.com'
      ) {
        e.currentTarget.className = styles.error;
      } else {
        e.currentTarget.className = '';
      }

      setEmail(e.currentTarget.value);
    }

    if (e.target.name === 'phone') {
      if (e.target.value.length < 3 || e.target.value.length > 13) {
      } else if (!Number(e.target.value)) {
        e.target.className = styles.error;
      } else {
        e.target.className = '';
        setPhone(e.target.value);
      }
    }
  };

  const createUser = () => {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('position_id', activePosition);
    formData.append('photo', formFile, formFileName);

    dispatch(createNewUser(formData)); // создаем Юзера
    dispatch(actions.setEmptyArray()); // делаем массив пользователей на клиенте пустым
    dispatch(
      actions.setLink(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
      ),
    );
    dispatch(actions.setIsLastPage(false));
    // берем 6 пользователей на 1-ой странице
    dispatch(
      getUsers('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'),
    );
  };

  return (
    <form className={styles.postRequest__form}>
      <fieldset className={styles.postRequest__formContacts}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={changeInput}
        />
        <label htmlFor="name">Username should contain 2-60 characters</label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={changeInput}
        />
        <label htmlFor="email">
          Email should contain 2-100 characters. For example: jhon@example.com{' '}
        </label>

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={changeInput}
        />
        <label htmlFor="phone">+38 (XXX) XXX - XX - XX</label>
      </fieldset>
      <fieldset className={styles.postRequest__formPosition}>
        <legend>Select your position</legend>
        {positions.map((position: Position) => {
          return (
            <div
              className="d-f ai-c"
              onClick={() => {
                setActivePosition(position.id);
              }}
              key={position.id}>
              <input
                className="d-f ai-c jc-c"
                type="radio"
                name="position"
                checked={position.id === activePosition && true}
                readOnly
              />
              <label htmlFor="frontend-developer">{position.name}</label>
            </div>
          );
        })}
      </fieldset>
      <div className={styles.postRequest__formFile}>
        <input
          name="file"
          type="file"
          id="input__file"
          className={styles.postRequest__formFileInput}
          onChange={changeFormInput}
        />
        <label htmlFor="input__file">
          <span>Upload</span>
          <span className={`${styles.postRequest__formFileName} ${'d-f ai-c'}`}>
            {formFileName}
          </span>
        </label>
      </div>
      <Button text="Sign up" color="gray-light" createUser={createUser} />
    </form>
  );
};

export default Form;
