// NavBarTest.js
import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";
import App from "../App";
import { Link, useNavigate } from 'react-router-dom';


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
    <Navbar style={{ backgroundColor: '#000000', color: '#000000', fontSize: '25px', textAlign: 'center'}}>
      <NavbarBrand classname="d-flex" style={{ color: '#FFFFFF', fontSize: '30px' }}>
        <div className="d-flex align-items-center">
          <img alt='Fuji Icon' src='/solaire_icon.png' style={{ height: 100, width: 100, marginright: '10px' }}></img>
          <div>
            <NavLink href="/home">andersonBee</NavLink>
          </div>
        </div>
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem className="d-flex">
          <NavLink href="/home" style={{ color: '#BA480A', marginRight: '50px' }}>my work</NavLink>
          <NavLink href="/personal" style={{ color: '#BA480A', marginRight: '50px' }}>personal</NavLink>
          <NavLink href="/AndersonBee__Resume.pdf" style={{ color: '#BA480A', marginRight: '50px' }} target="_blank" rel="noopener noreferrer" >resumé</NavLink>
          {userAuth_logout && (
            <button
              className="btn"
              onClick={user_Logout}
              style={{ color: '#BA480A', marginRight: '50px', fontSize: 'inherit', fontFamily: 'inherit', fontWeight: 'inherit' }}
            >
              LOGOUT
            </button>
          )}
        </NavItem>
      </Nav>
    </Navbar>
  );
}