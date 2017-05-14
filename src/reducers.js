import {
  UPDATE_CURR_X,
  UPDATE_FEED_ITEMS,
} from './actions';

const initialState = {
  x: 0,
  feedItems: [],
};

export function mouseMove(state = initialState, action) {
  switch(action.type) {
    case UPDATE_CURR_X:
      return Object.assign({}, state, {
        x: action.x,
      });
    default:
    return state;
  }
}

export function feedItems(state = initialState, action) {
  switch(action.type) {
    case UPDATE_FEED_ITEMS:
      return Object.assign({}, state, {
        items: action.items,
      });
    default:
      return state;
  }
}
