import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav>
        <div className="nav-link">
          <NavLink to="/">
            Vote
            <div className="nav-underline"></div>
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/admin">
            Admin
            <div className="nav-underline"></div>
          </NavLink>
        </div>
      </nav>
      <Outlet/>
    </>
  );
}

export default Layout;