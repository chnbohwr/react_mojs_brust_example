import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import RouteAnime from '../components/RouteAnime';
import Products from './Products';
import Home from './Home';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100wh',
};

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div style={style}>
          <Route component={RouteAnime} path="/" />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Products} path="/product" />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
