import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <img src="" alt="Instafeed" />
        </Link>
        <Link to="/new">
          <img src="" alt="Criar publicação" />
        </Link>
      </div>
    </header>
  )
}