import React from 'react';
import { Provider } from 'react-redux';

import GloablStyle from './styles/global';

import store from './store';

import {
  Container, Header,
} from './styles';

import Body from './components/Body';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <GloablStyle />
        <Header>
          <span>PriceStalker</span>
          <h2>Easy, fast and practical.</h2>
        </Header>
        <Body />
      </Container>
    </Provider>

  );
}

export default App;
