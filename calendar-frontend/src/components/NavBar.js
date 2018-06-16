import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'


const NavBar = props => {
  return (
    <div className="navbar-container">
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

      <NavLink
        className="navbar-item"
        to="/events/new"
      >
        SUBMIT
      </NavLink>
     </div>
  );
}


export default NavBar;
