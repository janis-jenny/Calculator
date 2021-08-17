import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quotes from './Quotes';
import Navbar from './Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Calculator" component={Calculator} />
      <Route exact path="/Quote" component={Quotes} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default App;
