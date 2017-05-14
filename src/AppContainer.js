import React, { PropTypes } from "react";

import "./index.global.css";
import "./highlight.global.css";

import Container from "./components/Container";
import DefaultHeadMeta from "./components/DefaultHeadMeta";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import store from './store';
import {
  updateCurrX,
  // updateFeedItems,
} from './actions';
import { Provider } from 'react-redux';

document.onmousemove = e => {
  store.dispatch(updateCurrX(e.pageX));
}

const AppContainer = (props) => (
  <Provider store={store}>
    <Container>
      <DefaultHeadMeta />
      <Header />
      <Content>
        { props.children }
      </Content>
      <Footer />
    </Container>
  </Provider>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
