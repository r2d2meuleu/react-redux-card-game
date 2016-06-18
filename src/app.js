import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import configureStore from 'redux/configureStore';
import { newGame } from 'redux/modules/game';
import { DevTools, Board } from './containers';
import './styles/app.scss';
import sharedStyles from 'components/shared/styles.scss';

if (module.hot) {
  module.hot.accept();
}

const store = configureStore();
store.dispatch(newGame({ yourName: 'Inooid', opponentName: 'OpponentName' }));

class App extends Component {
  render() {
    return <Board />;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <div className={sharedStyles.fullSize}>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
