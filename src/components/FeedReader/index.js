import React from 'React';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from "../Button"

import styles from './index.css';

function FeedReader({items = []}) {
  return (<div className={styles['feed-reader']}>
    <h2 className={ styles['feed-reader'] }>
      { "Latest FT.com stories" }
    </h2>
    <ul className={ styles['feed-reader'] }>
      {
        items.slice(0, 9).map((item, idx) => (<li key={idx} className={ styles['feed-reader--item'] }>
          <a className={ styles['feed-reader--item__title'] } href={item.link}>{item.title}</a>
          <time className={ styles['feed-reader--item__pub-date'] }>
            {item.pubDate ? new Date(item.pubDate).toISOString() : null}
          </time>
          <a href={item.link} className={ styles['feed-reader--item__read-more'] }>
            <Button secondary>{ "Read More →" }</Button>
          </a>
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
