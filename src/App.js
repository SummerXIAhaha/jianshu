import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Globalstyle } from './style.js';
import { Iconstyle } from './statics/iconfont/iconfont';
import Header from './common/header';

function App() {
  return (
    <div>
      <Globalstyle/>
      <Iconstyle/>
      <Provider store = {store}>
      <Header></Header>
      </Provider>
    </div>
  );
}

export default App;
