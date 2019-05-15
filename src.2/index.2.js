import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from 'react-router-dom';

import App from './App';
import { counter } from './index.redux';

const reduxDevTools = window.devToolsExtension
  ? window.devToolsExtension
  : () => {};
// window.devToolsExtension
const store = createStore(
  counter,
  compose(
    applyMiddleware(thunk),
    reduxDevTools()
  )
);

function Erying() {
  return <h2>二营</h2>;
}
function Qibinglian() {
  return <h2>骑兵连</h2>;
}

class test extends React.Component {
  render() {
    return <h2>404 Not Found{this.props.match.params.location}</h2>;
  }
}

function Topic({ match }) {
  console.log('Topic----match=', match);
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  console.log('Topics----match=', match);

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
        component={Topic}
      />
    </div>
  );
}

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavLink to="/home">Home</NavLink>
        <ul>
          <li>
            <Link to="/">一营</Link>
          </li>
          <li>
            <Link to="/erying">二营</Link>
          </li>
          <li>
            <Link to="/qibinglian">骑兵连</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <Switch>
          {/* 只渲染命中的第一个Route */}

          <Route exact path="/" component={App} />
          <Route path="/erying" component={Erying} />
          <Route path="/qibinglian" component={Qibinglian} />
          <Route path="/topics" component={Topics} />
          <Route path="/:location" component={test} />
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
      {/* <App /> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
