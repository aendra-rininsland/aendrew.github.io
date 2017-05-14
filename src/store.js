import { combineReducers, applyMiddleware } from "redux"
import createStore from "phenomic/lib/redux/createStore"
import thunk from 'redux-thunk';

// eslint-disable-next-line import/no-namespace
import { pages } from "phenomic/lib/redux/modules"
import { mouseMove, feedItems } from "./reducers";

const store = createStore(
  combineReducers({
    pages,
    mouseMove,
    feedItems,
  }),
  applyMiddleware(thunk),
  { ...(typeof window !== "undefined") && window.__INITIAL_STATE__ },
)

export default store
