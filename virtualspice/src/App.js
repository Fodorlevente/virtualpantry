import React from 'react';
import './App.css';
import Menu from './components/navigation/Menu';
import VirtualSpice from './pages/VirtualSpice';

function App() {
  return (
    <div className="App">
        <Menu />
        <VirtualSpice />
    </div>
  );
}

export default App;
