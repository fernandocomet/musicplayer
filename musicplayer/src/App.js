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
import Volume from './components/Volume';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
     
        <div className="progressbar"><Timeline></Timeline></div>
        <div className="playercontainer">
          <div className="left">
            <div className="player">
              <div className="player-shuffle"><Shuffle></Shuffle></div>
              <div className="player-loop"><Loop></Loop></div>
              <div className="player-previous"><Previous></Previous></div>
              <div className="player-play"><Play></Play></div>
              <div className="player-next"><Next></Next></div>
            </div>
            <div className="timecontainer"><Time></Time></div> 
          </div>
          <div className="center">
              <div className="center-caratule"><Caratule></Caratule></div>
              <div className="center-like"><Like></Like></div>
          </div>
          <div className="right">
            <div className="volumecontainer"><Volume></Volume></div>
            <div className="menucontainer"><Menu></Menu></div>
          </div>
        </div>

   
    </div>
  )
}

export default App;
