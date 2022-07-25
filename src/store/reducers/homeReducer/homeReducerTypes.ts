export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  registration_timestamp: number;
  photo: string;
  position_id: number;
}

export interface Position {
  id: number;
  name: string;
}

export interface HomeReducer {
  next_url: string;
  users: Array<User>;
  isLastPage: boolean;
  positions: Array<Position>;
  isSuccessfullyRegistration: boolean;
}
