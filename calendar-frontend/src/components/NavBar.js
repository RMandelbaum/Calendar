import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'


const NavBar = props => {
  return (
    <div className="navbar-container">
      <div className = "navbar-item">WELCOME, RACHEL!</div>
      <NavLink
      className="navbar-item"
        to="/"
      >
        CALENDAR
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/events"
      >
        EVENTS
      </NavLink>
     </div>
  );
}


export default NavBar;
