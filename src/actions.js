/**
 * Custom Redux actions
 */

export const UPDATE_CURR_X = 'UPDATE_CURR_X';
export const UPDATE_FEED_ITEMS = 'UPDATE_FEED_ITEMS';

export const updateCurrX = (x) => ({
  type: UPDATE_CURR_X,
  x,
});

export const updateFeedItems = () => (dispatch) =>
  fetch('https://www.ft.com/%C3%A6ndrew-rininsland?format=json')
  .then(res => res.json())
  .then((items) => dispatch({
    type: UPDATE_FEED_ITEMS,
    items,
  }));
