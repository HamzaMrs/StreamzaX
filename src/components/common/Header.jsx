import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ user, onLogin, onLogout }) {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="brand">StreamzaX</Link>
      </div>

      <nav className="header-nav">
        <Link to="/">Accueil</Link>
        <Link to="/movies">Films</Link>
        <Link to="/about">À propos</Link>
      </nav>

      <div className="header-right">
        {user ? (
          <>
            <span className="user">Bonjour, {user}</span>
            <button className="authBtn" onClick={onLogout}>Se déconnecter</button>
          </>
        ) : (
          <button className="authBtn" onClick={onLogin}>Se connecter</button>
        )}
      </div>
    </header>
  );
}
