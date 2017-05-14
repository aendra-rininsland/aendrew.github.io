import React from 'React';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

function FeedReader({items = []}) {
  return (<div>
    <h3>Latest FT.com stories</h3>
    <ul>
      {
        items.map(item => (<li>
          <a href={item.url}>{item.title}</a>
        </li>))
      }
    </ul>
  </div>);
}

FeedReader.propTypes = {
  items: propTypes.array,
};

export default connect(({feedItems}) => {
  return {
    items: feedItems.items,
  };
})(FeedReader);
