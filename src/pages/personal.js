//imports
import React, { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import NavBarTest from "../components/PrettyComps";

export default function Personal() {

    


    const [selectedProject, setSelectedProject] = useState(null) //tracks selected project

    //projects to be selected
    const projects = [
        { id: 1, name: "Project 1", desciption: "this is project 1" },
        { id: 2, name: "Project 2", desciption: "this is project 2" },
        { id: 3, name: "Project 3", desciption: "this is project 3" },
        { id: 4, name: "Project 3", desciption: "this is project 3" },

    ];



    return (
        <div style={{ backgroundColor: '#1B1818', color: 'white', minHeight: '100vh' }}>
            <NavBarTest />

            <div className="main-container">
                {/* left side*/}
                <div className="left-side">
                    <section className="welcome-section">
                        <p> headshot or something </p>
                    </section>
                    <p>coming soon </p>
                </div>

                {/* right side (about me ) */}
                <div className="right-side">
                    <section className="about_me">
                        <h2 className="proj_selection_title">about me x</h2>
                    </section>
                    <p>coming soon </p>
                </div>
            </div>

        </div>
    );
}