import React from 'react';
import {StoreContext} from 'storeon/react';
import {store} from '../../store/commentStore';
import {CommentForm} from "../CommentForm";

export function CommentFormContainer() {
  return (
    <StoreContext.Provider value={store}>
      <CommentForm/>
    </StoreContext.Provider>
  );
}