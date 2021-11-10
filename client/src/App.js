import logo from './logo.svg';
import './App.css';
import MngPirate from './views/MngPirate';
import {Router, Link, Redirect} from '@reach/router';
import MngStatus from './views/MngStatus';
import CrewPage from './views/CrewPage';
import PirateForm from './components/PirateForm';
import AboutPirate from './views/AboutPirate';

function App() {
  return (
    <Router>
      <Redirect from="/" to="/pirates"/>
      <CrewPage path="/pirates"/>
      <PirateForm path="/pirates/new"/>
      <AboutPirate path="/pirates/:id"/>
      <MngStatus path="/pirates/games/:gameId"/>
    </Router>
  );
}

export default App;
