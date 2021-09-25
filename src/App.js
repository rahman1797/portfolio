import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Journey from './Components/Journey';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/portfolio" component={Home} exac />
          <Route path="/portfolio/my-journey" component={Journey}/>
          <Route path="/project" component={Home} exac />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
