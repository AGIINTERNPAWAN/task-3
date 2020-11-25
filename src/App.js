import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import AppNav from './components/AppBar';
import About from './components/About';
import Home from './components/Home';
import Card1 from './components/Card1.js'
import Card2 from './components/Card2.js'
import Card3 from './components/Card3.js'
import Card4 from './components/Card4.js'
import Card5 from './components/Card5.js'
import Pricings from './components/Pricing';

export default function App() {
  return (
    <Router>
      <AppNav/>
      <Route path="/" exact component={Home}/>
      <Route path ="/pricings" component={Pricings}/>
      <Route path ="/about" component={About}/>
      <Route path = "/card1" component={Card1}/>
      <Route path = "/card2" component={Card2}/>
      <Route path = "/card3" component={Card3}/>
      <Route path = "/card4" component={Card4}/>
      <Route path = "/card5" component={Card5}/>
    </Router>
    
  );
}
