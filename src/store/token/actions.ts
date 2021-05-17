import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";

export const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string
}

export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
})

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  const token = localStorage.getItem('token') || window.__token__;
  dispatch(setToken(token))
  if (token !== 'undefined') {
    localStorage.setItem('token', token)
  }
}