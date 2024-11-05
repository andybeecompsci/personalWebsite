//imports
import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

import { useSearchParams } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import NavBarTest from "../components/PrettyComps";


export default function Home() {

    const navigate = useNavigate();

    return (
        <div>
            <NavBarTest />
            <div style={{ backgroundColor: '#1B1818', color: 'white', minHeight: '100vh' }}>


                <div style={{ display: 'flex' }}>

                    <div style={{ flex: 1, textAlign: "center", marginTop: "400px" }}>
                        <h1>welcome!</h1>
                        <p>I'm currently a student at QUT, studying IT, Majoring in Computer Science, and Minoring in Network Security and Business Enterprise Systems</p>
                        <Button
                            color="dark"
                            size="sm"
                            className="mt-3"
                            onClick={() => navigate("/personal")}>
                            ABOUT ME 
                        </Button>
                    </div>

                    <div style={{ flex: 2 }}>
                        <p style={{ height: 750, width: 1250, marginTop: "140px", marginRight: '10px', marginLeft: '200px' }}> PROJECTS! CHOOSE A PROJECT
                            ____________________________________________________
                            LEARN HOW TO MAKE THESE CONTAINERS VERTICALLY SEPERATE, ADD INDIVIDUAL PROJECT DESCRIPTIONS LIKE MICHELLE LIU'S WEBSITE </p>
                        
                    </div>

                  


                </div>
            </div>
        </div>
    )

}