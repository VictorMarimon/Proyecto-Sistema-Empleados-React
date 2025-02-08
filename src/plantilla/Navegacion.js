import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navegacion() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-2">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Sistema de Recursos Humanos</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/agregar' ? 'active' : ''}`} to="/agregar">Agregar Empleado</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
