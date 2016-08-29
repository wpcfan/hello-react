import React from 'react';
import { Link } from 'react-router';
import './style.css';

const Header = () => (
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">My Todo App</span>
      <div className="mdl-layout-spacer"></div>
      <nav className="mdl-navigation">
        <Link className="mdl-navigation__link" to="/">Home</Link>
        <Link className="mdl-navigation__link" to="/todo">Todo</Link>
        <Link className="mdl-navigation__link" to="/about">About</Link>
      </nav>
    </div>
  </header>
);

export default Header;
