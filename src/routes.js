import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/app';
import Home from './components/home';
import Quotes from './components/quotes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/quote" component={Quotes} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
