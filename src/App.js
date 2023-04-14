import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey! My name is Nazim && you are welcome to my projects :)
        </p>
        <a
          className="App-link"
          href="http://log.center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log Center
        </a>
      </header>
    </div>
  );
}

export default App;
