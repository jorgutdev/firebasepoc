import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Main } from "./containers/Main";
import store from './redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>

    );
  }
}

export default App;
