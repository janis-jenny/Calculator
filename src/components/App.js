import { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
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
    const newState = calculate(this.state, btnName);
    this.setState(newState);
  }

  render() {
    const { total, next } = this.state;
    let result;
    if (!total && !next) {
      result = '0';
    } else if (!next) {
      result = total;
    } else {
      result = next;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Calculator
          </h1>
        </header>
        <>
          <Display result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </>
      </div>
    );
  }
}

export default App;
