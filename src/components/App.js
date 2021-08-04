import { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    this.setState((prevState) => calculate(prevState, btnName));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Calculator
          </h1>
        </header>
        <>
          <Display />
          <ButtonPanel />
        </>
      </div>
    );
  }
}

export default App;
