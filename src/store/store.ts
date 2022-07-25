import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/homeReducer/homeReducer';
// ...

export const store = configureStore({
  reducer: {
    homeReducer,
  },
});

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  PropertiesTypes<T>
>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
