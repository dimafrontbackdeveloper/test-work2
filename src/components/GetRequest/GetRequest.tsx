import React, { useEffect } from 'react';
import styles from './style.module.scss';

import Button from '../Button/Button';
import Column from './components/Column/Column';
import { useAppSelector } from '../../store/hooks/hooks';
import { User } from '../../store/reducers/homeReducer/homeReducerTypes';
import { useDispatch } from 'react-redux';
import { getLink, getUsers } from '../../store/actions/homeActions/homeActions';

const GetRequest = () => {
  const dispatch = useDispatch();

  const users = useAppSelector((state) => state.homeReducer.users);
  const link = useAppSelector((state) => state.homeReducer.next_url);
  const isLastPage = useAppSelector((state) => state.homeReducer.isLastPage);

  useEffect(() => {
    dispatch(getUsers(link));
    dispatch(getLink(link));
  }, []);

  const getNewUsers = () => {
    dispatch(getUsers(link));
  };

  const getNewLink = () => {
    dispatch(getLink(link));
  };

  return (
    <section className={`${styles.getRequest} ${'section ta-c'}`}>
      <div className="container">
        <h2 className="title ta-c">Working with GET request</h2>
        <div className={`${styles.getRequest__row} ${'d-g gtc-3 ta-c'}`}>
          {users.map((user: User) => {
            return (
              <Column
                key={user.id}
                photo={user.photo}
                name={user.name}
                position={user.position}
                email={user.email}
                phoneNumber={user.phone}
              />
            );
          })}
        </div>
        {!isLastPage && (
          <Button
            text="Show more"
            color="yellow"
            getNewUsers={getNewUsers}
            getNewLink={getNewLink}
          />
        )}
      </div>
    </section>
  );
};

export default GetRequest;
