import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './router/Router';
import RoutingAdmin from './router/RouterAdmin';

function App() {
  return (
    <div className="App">
      <Routing/>
      <RoutingAdmin/>
    </div>
  );
}

export default App;
