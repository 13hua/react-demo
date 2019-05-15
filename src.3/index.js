import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import reducers from './reducer';
import './config.js';

import Auth from './Auth.js';
import Dashboard from './Dashboard.js';
// import { counter } from './index.redux';

/**
 * 登录
 *    没有登陆信息 统一跳转login
 * 页面  导航+显示+注销
 *    一营
 *    二营
 *    骑兵连
 * router + redux
 */

const reduxDevTools = window.devToolsExtension
  ? window.devToolsExtension
  : () => {};

// window.devToolsExtension
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    reduxDevTools()
  )
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Switch>
            <Route path="/login" component={Auth} />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect from="*" to="/dashboard" />
          </Switch>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
