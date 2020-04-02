import React from 'react';
import './App.css';
import { Router, Route } from "react-router-dom";
import history from "./history";

import Menu from './components/navigation/Menu';
import VirtualSpice from './pages/VirtualSpice';
import Recepie from './pages/Recepie';
import ShoppingList from './pages/ShoppingList';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route path="/" component={Menu} />
        <Route path="/virtualspice" component={VirtualSpice} />
        <Route path="/recepie" component={Recepie} />
        <Route path="/shoppinglist" component={ShoppingList} />
      </Router>
    </div>
  );
}

export default App;
