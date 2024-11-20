// NavBarTest.js
import React from "react";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import App from "../App";
import { Link, useNavigate } from 'react-router-dom';
import { color } from "chart.js/helpers";
import { NavLink } from "react-router-dom";


export default function NavBarTest() {

  const navigate = useNavigate();
  

  const userAuth_logout = localStorage.getItem('token');


  

  return (
    <Navbar className="navbar">
      <NavbarBrand className="navbar-brand">
        <div className="d-flex align-items-center">
          <img alt="Solaire" src={`${process.env.PUBLIC_URL}/images/solaire_icon.png`} className="navbar-img" />

          <div>
            <NavLink to="/home" className="navbar-link name-link">andersonBee</NavLink>
          </div>
        </div>
      </NavbarBrand>
      <Nav>
        
          <NavLink to="/home" className="navbar-link">my work</NavLink>
          <NavLink to="/personal" className="navbar-link">personal</NavLink>
        <a
          href={`${process.env.PUBLIC_URL}/AndersonBee__Resume.pdf`}
          className="navbar-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          resumé
        </a>
       



          
        
      </Nav>
    </Navbar>
  );
}