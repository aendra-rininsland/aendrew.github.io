import React from "react"
import LatestPosts from "../../components/LatestPosts";
import FeedReader from '../../components/FeedReader';
import Social from '../../components/Social';
import Page from "../Page";

import styles from './index.css';


const Homepage = (props = {}) => {
  const bodyAttributes = {
    class: styles.container,
  };
  return (
    <Page { ...props } htmlAttributes={bodyAttributes}>
      <Social />
      <div className={styles['widget-container']}>
        <FeedReader />
        <LatestPosts />
      </div>
    </Page>
  )
}

export default Homepage
