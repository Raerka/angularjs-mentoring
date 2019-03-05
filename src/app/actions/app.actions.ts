import { Action } from '@ngrx/store';

export enum AppActionTypes {
  LoadingStart = '[App] Loading Start',
  LoadingEnd = '[App] Loading End'
}

export class LoadingStart implements Action {
  readonly type = AppActionTypes.LoadingStart;
}

export class LoadingEnd implements Action {
  readonly type = AppActionTypes.LoadingEnd;
}

export type AppActionsUnion = LoadingStart | LoadingEnd;
