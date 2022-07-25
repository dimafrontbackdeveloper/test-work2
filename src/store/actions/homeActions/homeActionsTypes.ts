import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';
import { InferActionsTypes } from '../../store';
import { actions } from './homeActions';

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type ThunkType = ThunkAction<Promise<void>, RootStateOrAny, unknown, Action<string>>;
