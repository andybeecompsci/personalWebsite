//imports
import React, { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import NavBarTest from "../components/PrettyComps";

export default function Personal() {

    


    return (
        <div >
            <NavBarTest />
            <div style={{ backgroundColor: '#1B1818', color: 'white', minHeight: '100vh' }}>


            <p className="flex-paragraph"> FUN COOL SHIT LIKE A HEADSHOT, INTERESTS, SONGS, GAMES, HOBBIES </p>
            </div>

        </div>
    )
}