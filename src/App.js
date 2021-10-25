import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/portfolio" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
