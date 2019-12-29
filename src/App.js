import React from 'react';
import { Provider } from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import store from './store';
import { Globalstyle } from './style.js';
import { Iconstyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import LoginIn from './pages/loginIn';
import Write from './pages/write';

function App() {
  return (
    <div>
      <Globalstyle/>
      <Iconstyle/>
      <Provider store = {store}>
        <HashRouter>
          <Header></Header>
          <Route exact path="/" component={Home}></Route>
          {/* <Route  exact path="/detail/:id" component={Detail}></Route> */}
          <Route  exact path="/detail" component={Detail}></Route>
          <Route  exact path="/loginIn" component={LoginIn}></Route>
          <Route  exact path="/write" component={Write}></Route>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
