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
      // eslint-disable-next-line react/no-unused-state
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    // const newState = calculate(this.state, btnName);
    // this.setState(newState);
    this.setState((prevState) => calculate(prevState, btnName));
    // eslint-disable-next-line no-console
    console.log('I was clicked');
  }

  render() {
    const { total, next } = this.state;
    let result;
    if (!total && !next) {
      result = '0';
    } else if (!total) {
      result = next;
    } else {
      result = total;
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
