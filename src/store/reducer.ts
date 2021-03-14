import {ActionCreator, Reducer} from "redux";
import {
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  MeRequestAction,
  MeRequestErrorAction,
  MeRequestSuccessAction
} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";
import {SET_TOKEN, SetTokenAction} from "./token/actions";
import {tokenReducer, TokenState} from "./token/reducer";

export type RootState = {
  commentText: string;
  token: TokenState;
  me: MeState
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({
  type: UPDATE_COMMENT,
  text,
});


const initialState: RootState = {
  commentText: 'Привет',
  token: {
    token: '',
  },
  me: {
    loading: false,
    error: '',
    data: {},
  },
}

type MyAction = UpdateCommentAction
  | SetTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action)
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action)
      };
    default:
      return state;
  }
}