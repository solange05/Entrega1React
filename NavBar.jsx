import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Mi Pagina</div>
      <div className="navButtons">
        <button className="button">Electrónica</button>
        <button className="button">Indumentaria</button>
        <button className="button">Repuestos</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;