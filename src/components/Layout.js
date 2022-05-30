import React from 'react';
import { Outlet, useLocation, NavLink } from 'react-router-dom';

function Layout() {
  let location = useLocation();
  
  let currentUrl = (str) => {
    if (location.pathname.search(str) >= 0) {
      return true;
    }
    return false;
  }


  if (currentUrl("voter-dashboard")) {
    return (
      <>
        <nav>
          <div className="nav-link long">
            <NavLink to="/">
              President
              <div className="nav-underline"></div>
            </NavLink>
          </div>
          <div className="nav-link long">
            <NavLink to="/">
              Vice-President
              <div className="nav-underline"></div>
            </NavLink>
          </div>
          <div className="nav-link long">
            <NavLink to="/">
              Senator
              <div className="nav-underline"></div>
            </NavLink>
          </div>
        </nav>
        <Outlet/>
      </>
    );
  }
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