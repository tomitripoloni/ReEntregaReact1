
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <div className="app-container">
      <Navbar>
        <CartWidget />
      </Navbar>
      <ItemListContainer greeting="Bienvenido a nuestra tienda en línea" />
      {}
    </div>
  );
}

export default App;
