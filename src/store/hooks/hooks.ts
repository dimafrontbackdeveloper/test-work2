import { actions } from './../actions/homeActions/homeActions';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import type { RootState } from './../store';
import { ThunkType } from '../actions/homeActions/homeActionsTypes';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
