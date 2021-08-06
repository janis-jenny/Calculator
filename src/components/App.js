import { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

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
    const { next, total, operation } = this.state;

    switch (btnName) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        if (!total && !operation) {
          const newNext = next ? `${next}${btnName}` : btnName;
          const newState = { ...this.state, next: newNext };
          this.setState(newState);
          return;
        }
        if (total && operation) {
          const newNext = next ? `${next}${btnName}` : btnName;
          const newState = { ...this.state, next: newNext };
          this.setState(newState);
          return;
        }
        if (operation) {
          const total = next;
          const newState = { total, next: btnName };
          this.setState(newState);
        }
        break;
      case '+':
      case '-':
      case 'X':
      case '÷': {
        // when i click +, operation is now set to +
        const newOp = btnName;
        const newState = { ...this.state, operation: newOp };
        this.setState(newState);
        return;
      }
      case '+/-':
      case '.':
      case 'AC': {
        const newState = calculate(this.state, btnName);
        this.setState(newState);
      }
        break;
      case '%': {
        const newOp = btnName;
        const newTotal = operate(next, 0, '%');
        const newState = { total: newTotal, next: null, operation: newOp };
        this.setState(newState);
      }
        break;
      case '=': {
        const result = operate(total, next, operation);
        const newState = { total: result, next: null, operation: null };
        this.setState(newState);
      }
        break;
      default:
        break;
    }
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
