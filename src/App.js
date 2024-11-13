//general
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './pages/home';
//css
import './/components/style.css'

//comps
import NavBarTest from './components/PrettyComps';


//volc_list
import { AgGridReact } from 'ag-grid-react';
import { Button, Badge, Row, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-balham.css"



function App() {
  const navigate = useNavigate();

  //home page on boot 
  useEffect(() => {
    navigate("/home")

  })
}


export default App;
