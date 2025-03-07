import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import "./NavbarStyles.css";

const Layout = () => {
    return (
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-light" aria-current="page" to="/Home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Perfil">Perfil</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Dashboard">Dashboard</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-warning text-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  };
  

export default Layout
