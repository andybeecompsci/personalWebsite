//imports
import React, { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import NavBarTest from "../components/PrettyComps";

export default function Personal() {

    const API_URL = `http://4.237.58.241:3000`;
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');

    // personal function 
    const login = (email, password) => {
        const url = `${API_URL}/user/personal`;
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((res) =>
                res.json().then((res) => {
                    if (res.error) {
                        setErrorMsg(res.message);
                    }
                    else {
                        localStorage.setItem("token", res.token);
                        console.log(res);
                        navigate('/home'); //reload so logout button appears
                    }
                })
            )
            .catch((error) => {
                setErrorMsg('An error occured ): Please try again later ');
                console.log(error);
            });
    };

    //from prac, gets volc details i need for logged_volc_indiv


    return (
        <div >
            <NavBarTest />
            <div style={{ backgroundColor: '#1B1818', color: 'white', minHeight: '100vh' }}>


            <p> FUN COOL SHIT LIKE A HEADSHOT, INTERESTS, SONGS, GAMES, HOBBIES </p>
            </div>

        </div>
    )
}