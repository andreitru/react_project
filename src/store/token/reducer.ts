import {SET_TOKEN, SetTokenAction} from "./actions";
import {Reducer} from "react";

export type TokenState = {
  token: string
}

type TokenAction = SetTokenAction;

export const tokenReducer: Reducer<TokenState, TokenAction> = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
}