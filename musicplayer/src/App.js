import logo from './logo.svg';
import './App.css';
import Shuffle from './components/Shuffle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Shuffle></Shuffle>
      </header>
    </div>
  );
}

export default App;
