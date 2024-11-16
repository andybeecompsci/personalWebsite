//imports
import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

import { useSearchParams } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import NavBarTest from "../components/PrettyComps";


export default function Home() {

    const navigate = useNavigate();

    // return (
    //     <div>
    //         <NavBarTest />
    //         <div style={{ backgroundColor: '#1B1818', color: 'white', minHeight: '100vh' }}>


    //             <div style={{ display: 'flex' }}>

    //                 <div style={{ flex: 1, textAlign: "center", marginTop: "400px" }}>
    //                     <h1>welcome!</h1>
    //                     <p>I'm currently a student at QUT, studying IT, Majoring in Computer Science, and Minoring in Network Security and Business Enterprise Systems</p>
    //                     <Button
    //                         color="dark"
    //                         size="sm"
    //                         className="mt-3"
    //                         onClick={() => navigate("/personal")}>
    //                         ABOUT ME 
    //                     </Button>
    //                 </div>

    //                 <div style={{ flex: 2 }}>
    //                     <p style={{ height: 750, width: 1250, marginTop: "140px", marginRight: '10px', marginLeft: '200px' }}> PROJECTS! CHOOSE A PROJECT
    //                         ____________________________________________________
    //                         LEARN HOW TO MAKE THESE CONTAINERS VERTICALLY SEPERATE, ADD INDIVIDUAL PROJECT DESCRIPTIONS LIKE EXAMPLE WEBSITE</p>
                        
    //                 </div>

                  


    //             </div>
    //         </div>
    //     </div>
    // )

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

                    <section className="proj_selection">
                        <p>choose projects, updates section below, make these links</p>
                    </section>

                    <section className="proj_details">
                        <img alt="Solaire" src="/images/solaire_icon.png" className="proj_img" />
                    </section>

                    <section className="proj_details">
                        <p>make this section reactive. loads content based off what is clicked on above</p>
                    </section>
                    
                </div>
            </div>

        </div>
    );


}