import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quotes from './Quotes';
import Navbar from './Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Calculator" component={Calculator} />
        <Route exact path="/Quotes" component={Quotes} />
      </Switch>
    </div>
  );
}
