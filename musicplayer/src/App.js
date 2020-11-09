import logo from './logo.svg';
import './App.css';
import Timeline from './components/Timeline';
import Shuffle from './components/Shuffle';
import Loop from './components/Loop';
import Previous from './components/Previous';
import Play from './components/Play';
import Next from './components/Next';
import Time from './components/Time';
import Caratule from './components/Caratule';
import Like from './components/Like';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timeline></Timeline>
        <Shuffle></Shuffle>
        <Loop></Loop>
        <Previous></Previous>
        <Play></Play>
        <Next></Next>
        <Time></Time>
        <Caratule></Caratule>
        <Like></Like>
        <Menu></Menu>
      </header>
    </div>
  );
}

export default App;
