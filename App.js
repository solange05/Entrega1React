import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer message="Bienvenido a mi E-commerce" />
    </div>
  );
};

export default App;