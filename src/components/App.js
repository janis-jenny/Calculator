import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
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

export default App;
