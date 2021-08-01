import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Calculator
        </h1>
      </header>
      <body>
        <>
          <Display />
          <ButtonPanel />
        </>
      </body>
    </div>
  );
}

export default App;
