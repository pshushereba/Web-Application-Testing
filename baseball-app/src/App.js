import React, {useState} from 'react';
import './App.css';

// Import components

import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';

function App() {

  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);

  const addBall = () => {
    if (ball < 4) {
      return setBall(ball + 1);
    } else if (ball === 4) {
      setBall(0);
      setStrike(0);
      return;
    }
  }

  const addStrike = () => {
    if (strike < 3) {
      return setStrike(strike + 1);
    } else if (strike === 3) {
      setStrike(0);
      setBall(0);
      return;
    }
  }

  const addFoul = () => {
    if (strike < 2) {
      return setStrike(strike + 1);
    } else if (strike === 2) {
      return strike;
    }
  }

  const addHit = () => {
    setBall(0);
    setStrike(0);
    return
  }

  return (
    <div className="App">
      <Display ball={ball} strike={strike} />
      <Dashboard
        add_ball={addBall}
        add_strike={addStrike}
        add_foul={addFoul}
        add_hit={addHit} />
    </div>
  );
}

export default App;
