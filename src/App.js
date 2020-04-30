import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;