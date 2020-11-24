import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import AppNav from './components/AppBar';
import About from './components/About';
import Home from './components/Home';
import Pricings from './components/Pricing';

export default function App() {
  return (
    <Router>
      <AppNav/>
      <Route path="/" exact component={Home}/>
      <Route path ="/pricings" component={Pricings}/>
      <Route path ="/about" component={About}/>
    </Router>
    
  );
}
