import React from 'react';
import { Outlet, useLocation, NavLink, Link } from 'react-router-dom';

function Layout() {
  let location = useLocation();
  
  let currentUrl = (str) => {
    if (location.pathname.search(str) >= 0) {
      return true;
    }
    return false;
  }

  //voter
  if (currentUrl("voter-dashboard")) {
    if (currentUrl("vice-president")) {
      return (
        <>
          <nav>
            <div className="nav-link long">
              <Link to="voter-dashboard">
                President
                <div className="nav-underline"></div>
              </Link>
            </div>
            <div className="nav-link long">
              <Link to="voter-dashboard/vice-president" className="active">
                Vice-President
                <div className="nav-underline"></div>
              </Link>
            </div>
            <div className="nav-link long">
              <Link to="voter-dashboard/senator">
                Senator
                <div className="nav-underline"></div>
              </Link>
            </div>
          </nav>
          <Outlet/>
        </>
      );
    }

    if (currentUrl("senator")) {
      return (
        <>
          <nav>
            <div className="nav-link long">
              <Link to="voter-dashboard">
                President
                <div className="nav-underline"></div>
              </Link>
            </div>
            <div className="nav-link long">
              <Link to="voter-dashboard/vice-president">
                Vice-President
                <div className="nav-underline"></div>
              </Link>
            </div>
            <div className="nav-link long">
              <Link to="voter-dashboard/senator" className="active">
                Senator
                <div className="nav-underline"></div>
              </Link>
            </div>
          </nav>
          <Outlet/>
        </>
      );
    }

    return (
      <>
        <nav>
          <div className="nav-link long">
            <Link to="voter-dashboard" className="active">
              President
              <div className="nav-underline"></div>
            </Link>
          </div>
          <div className="nav-link long">
            <Link to="voter-dashboard/vice-president">
              Vice-President
              <div className="nav-underline"></div>
            </Link>
          </div>
          <div className="nav-link long">
            <Link to="voter-dashboard/senator">
              Senator
              <div className="nav-underline"></div>
            </Link>
          </div>
        </nav>
        <Outlet/>
      </>
    );
  }

  // admin
  if (currentUrl("admin-dashboard")) {
    if (currentUrl("candidates")) {
      return (
        <>
          <nav>
            <div className="nav-link med">
              <Link to="admin-dashboard">
                Status
                <div className="nav-underline"></div>
              </Link>
            </div>
            <div className="nav-link med">
              <Link to="admin-dashboard/candidates" className="active">
                Candidates
                <div className="nav-underline"></div>
              </Link>
            </div>
            <div className="nav-link med">
              <Link to="admin-dashboard/settings">
                Settings
                <div className="nav-underline"></div>
              </Link>
            </div>
          </nav>
          <Outlet/>
        </>
      );
    }

    if (currentUrl("settings")) {
      return (
        <>
          <nav>
            <div className="nav-link med">
              <Link to="admin-dashboard">
                Status
                <div className="nav-underline"></div>
              </Link>
            </div>
            <div className="nav-link med">
              <Link to="admin-dashboard/candidates">
                Candidates
                <div className="nav-underline"></div>
              </Link>
            </div>
            <div className="nav-link med">
              <Link to="admin-dashboard/settings" className="active">
                Settings
                <div className="nav-underline"></div>
              </Link>
            </div>
          </nav>
          <Outlet/>
        </>
      );
    }

    return (
      <>
        <nav>
          <div className="nav-link med">
            <Link to="admin-dashboard" className="active">
              Status
              <div className="nav-underline"></div>
            </Link>
          </div>
          <div className="nav-link med">
            <Link to="admin-dashboard/candidates">
              Candidates
              <div className="nav-underline"></div>
            </Link>
          </div>
          <div className="nav-link med">
            <Link to="admin-dashboard/settings">
              Settings
              <div className="nav-underline"></div>
            </Link>
          </div>
        </nav>
        <Outlet/>
      </>
    );
  }

  // login
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