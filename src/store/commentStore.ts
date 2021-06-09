import {createStoreon, StoreonModule} from "storeon";

interface State {
  comment: string
}

interface Events {
  'setComment': string
}

let comment: StoreonModule<State, Events> = store => {
  store.on('@init', () => ({comment: 'Comment from Storeon'}))
  store.on('setComment', ({comment}, data) => ({comment: data}))
}

export const store = createStoreon([comment])