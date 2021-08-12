import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Quotes from './components/Quotes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/" component={App} />
      <Route exact path="/Quote" component={Quotes} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
