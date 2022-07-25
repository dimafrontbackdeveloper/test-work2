import { ActionsTypes } from '../../actions/homeActions/homeActionsTypes';
import { HomeReducer, Position, User } from './homeReducerTypes';

const initialState: HomeReducer = {
  next_url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
  users: [],
  isLastPage: false,
  positions: [] as Array<Position>,
  isSuccessfullyRegistration: false,
};

const homeReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        // добавление новых юзеров, и фильтрация по registration_timestamp
        users: [...state.users, ...action.users].sort((a: User, b: User) =>
          a.registration_timestamp > b.registration_timestamp ? -1 : 1,
        ),
      };

    case 'SUCCESSFULLY_REGISTRATION':
      return {
        ...state,
        isSuccessfullyRegistration: true,
      };

    case 'SET_EMPTY_ARRAY':
      return {
        ...state,
        users: [],
      };

    // устанавливаем новую ссылку, на короую будет идти следующий запрос получения пользователей
    case 'SET_LINK':
      return {
        ...state,
        next_url: action.link,
      };

    // если true, то я скрываю кнопку 'show more' в компоненте GetRequest
    case 'SET_IS_LAST_PAGE':
      return {
        ...state,
        isLastPage: action.bool,
      };

    case 'SET_POSITIONS':
      return {
        ...state,
        positions: [...action.positions],
      };
    default:
      return state;
  }
};

export default homeReducer;
