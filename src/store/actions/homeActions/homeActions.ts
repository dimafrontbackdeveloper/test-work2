import axios from 'axios';
import { Dispatch } from 'react';
import { Position, User } from '../../reducers//homeReducer/homeReducerTypes';
import { ActionsTypes, ThunkType } from './homeActionsTypes';

export const getUsers = (nextUrl: string): ThunkType => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    try {
      const { data } = await axios(nextUrl);
      if (data.success) {
        dispatch(actions.setUsers(data.users));
      } else {
        throw new Error(data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const getLink = (nextUrl: string): ThunkType => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    try {
      const { data } = await axios(nextUrl);

      if (data.success && data.links.next_url) {
        dispatch(actions.setLink(data.links.next_url));
      } else {
        dispatch(actions.setIsLastPage(true));
        throw new Error(data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const createNewUser = (formData: any): ThunkType => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    try {
      const res = await axios('https://frontend-test-assignment-api.abz.agency/api/v1/token');
      const tokenData = res.data;

      if (tokenData.success) {
        const res = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
          method: 'POST',
          body: formData,
          headers: {
            Token: tokenData.token,
          },
        });

        if (!res.ok) {
          throw new Error(res.statusText);
        } else {
          dispatch(actions.successfullyRegistration());
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const getPositions = (): ThunkType => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    try {
      const { data } = await axios(
        'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
      );

      if (!data.success) {
        throw new Error(data.message);
      }

      dispatch(actions.setPositions(data.positions));
    } catch (e) {
      console.log(e);
    }
  };
};

export const actions = {
  setUsers: (users: Array<User>) => {
    return {
      type: 'SET_USERS',
      users,
    } as const;
  },

  successfullyRegistration: () => {
    return {
      type: 'SUCCESSFULLY_REGISTRATION',
    } as const;
  },

  setLink: (link: string) => {
    return {
      type: 'SET_LINK',
      link,
    } as const;
  },

  setIsLastPage: (bool: boolean) => {
    return {
      type: 'SET_IS_LAST_PAGE',
      bool,
    } as const;
  },

  setPositions: (positions: Array<Position>) => {
    return {
      type: 'SET_POSITIONS',
      positions,
    } as const;
  },

  setEmptyArray: () => {
    return {
      type: 'SET_EMPTY_ARRAY',
    } as const;
  },
};
