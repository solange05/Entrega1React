import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './App.css';

const App = () => {
  const cartItemCount = 14; // Cantidad de productos en el carrito

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Página Epica</div>
        <div className="navButtons">
          <button className="button">Electrónica</button>
          <button className="button">Indumentaria</button>
          <button className="button">Repuestos</button>
        </div>
        <div className="cartIcon">
          <FaShoppingCart size={24} />
          {cartItemCount > 0 && (
            <span className="cartCount">{cartItemCount}</span>
          )}
        </div>
      </nav>
      <div className="body">
        <h1>Bienvenido a mi E-commerce</h1>
      </div>
    </div>
  );
};

export default App;