import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "./Auth/UserContext"; 
import { Navbar, Nav, NavItem } from "reactstrap";
import "./Navigation.css";





function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  function loggedInNav() {
    return (

          <Navbar expand="md">
        <Nav className="ml-auto" navbar>
         <NavItem>
          <NavLink className="nav-link" to="/companies">
              Companies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/jobs">
              Jobs
            </NavLink>
      </NavItem>
      <NavItem>
      <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
      </NavItem>
      <NavItem>
            <Link className="nav-link" to="/" onClick={logout}>
              Log out {currentUser.first_name || currentUser.username}
            </Link>
      </NavItem>
    </Nav>

    </Navbar>
    );
    }

    function loggedOutNav() {
    return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
          <Navbar expand="md">
    
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
              </NavItem>
              <NavItem>
              <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
              </NavItem>
            </Nav>
    
          </Navbar>
          </li>
        </ul>
    );
  }

  return (
      <nav className="Navigation navbar navbar-expand-md">
        <Link className="navbar-brand" to="/">
          Jobly
        </Link>
        {currentUser ? loggedInNav() : loggedOutNav()}
      </nav>
  );
}

export default Navigation;
