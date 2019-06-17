import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducer';
import './config.js';
import './index.css';

import AuthRoute from './component/authroute/authroute';

import Login from './container/login/login.js';
import Register from './container/register/register.js';
import BossInfo from './container/bossinfo/bossinfo.js';
import GeniusInfo from './container/geniusinfo/geniusinfo.js';
import Dashboard from './component/dashboard/dashboard.js';
import Chat from './component/chat/chat.js';

const reduxDevTools = window.devToolsExtension
  ? window.devToolsExtension
  : f => f;

// window
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    reduxDevTools()
  )
);

// boss genius me msg 4个页面

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute />
        <Switch>
          <Route path="/geniusinfo" component={GeniusInfo} />
          <Route path="/bossinfo" component={BossInfo} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/chat/:user" component={Chat} />
          <Route component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
