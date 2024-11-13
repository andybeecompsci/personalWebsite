// NavBarTest.js
import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";
import App from "../App";
import { Link, useNavigate } from 'react-router-dom';
import { color } from "chart.js/helpers";


export default function NavBarTest() {

  const navigate = useNavigate();
  

  const userAuth_logout = localStorage.getItem('token');


  const user_Logout = () => {
    // clear token
    localStorage.removeItem('token');
    // redirct to home 
    navigate('/home');
  };

  return (
    <Navbar classname="navbar">
      <NavbarBrand className="navbar-brand">
        <div className="d-flex align-items-center">
          <img alt="Solaire" src="/images/solaire_icon.png" className="navbar-img" />
          <div>
            <NavLink href="/home" className="navbar-link name-link">andersonBee</NavLink>
          </div>
        </div>
      </NavbarBrand>
      <Nav className="ml-auto navbar">
        <NavItem className="d-flex">
          <NavLink href="/home" className="navbar-link">my work</NavLink>
          <NavLink href="/personal" className="navbar-link">personal</NavLink>
          <NavLink href="/AndersonBee__Resume.pdf" className="navbar-link" target="_blank" rel="noopener noreferrer">resumé</NavLink>
          {userAuth_logout && (
          <button className="logout-button" onClick={user_Logout}>
            LOGOUT
          </button>
        )}
        </NavItem>
      </Nav>
    </Navbar>
  );
}