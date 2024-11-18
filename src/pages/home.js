//imports
import React, { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

import { useSearchParams } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import NavBarTest from "../components/PrettyComps";


export default function Home() {

    const navigate = useNavigate();

    const [selectedProject, setSelectedProject] = useState(null) //tracks selected project

    //projects to be selected
    const projects = [
        { id:1, name: "Project 1", desciption: "this is project 1"},
        { id: 2, name: "Project 2", desciption: "this is project 2" },
        { id: 3, name: "Project 3", desciption: "this is project 3" },
    ];
    

    
    return (
        <div style={{ backgroundColor: '#1B1818', color: 'white', minHeight: '100vh' }}>
            <NavBarTest />
           
            <div className="main-container">
                {/* Left Side: Welcome */}
                <div className="left-side">
                    <section className="welcome-section">
                        <h1>welcome!</h1>
                        <p>
                            I'm currently a student at QUT, studying IT, Majoring in Computer
                            Science, and Minoring in Network Security and Business Enterprise
                            Systems
                        </p>

                        <div className="welcome-links">
                            <a href="mailto:andersonjbee@gmail.com" target="_blank" rel="noopener noreferrer">email</a>
                            <a href="https://github.com/andybeecompsci" target="_blank" rel="noopener noreferrer">github</a>
                            <a href="https://www.linkedin.com/in/anderson-be3" target="_blank" rel="noopener noreferrer">linkedin</a>
                            <a href="https://open.spotify.com/user/y74axlou6bkr879jlvxsyptdt?si=af1ff70ecb36432b" target="_blank" rel="noopener noreferrer">spotify</a>
                        </div>
                    </section>
                </div>

                {/* Right Side: Projects */}
                <div className="right-side"> 
                    
                    <section className="projects">
                        <h2>Selected Work</h2>
                    </section>
                    {/* select project */}
                    <section className="proj_selection">
                        {projects.map((project) =>(
                            <button
                            key={project.id}
                            className="proj_button"
                            onClick={() => setSelectedProject(project)}
                            >
                                {project.name}
                            </button>
                        ))}
                    </section>

                    <section className="proj_details">
                        {selectedProject ? (
                            <div>
                                <h2>{selectedProject.name}</h2>
                                <p>{selectedProject.desciption}</p>
                            </div>
                        ) : (
                            <p> select a project</p>
                        )}
                    </section>

                    <section className="proj_details">
                    </section>
                    
                </div>
            </div>

        </div>
    );


}