import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";
import MoonPng from '../../assert/img/moon.png';
import LogoPng from '../../assert/img/logo.png';

const Header = () => {
    const activeStyle = { color: "#ff4321" };
    return (
        <>
            {/* <nav>
                <NavLink to="/" activeStyle={activeStyle} exact>
                    Home
                </NavLink>
                {" | "}
                <NavLink to="/customers" activeStyle={activeStyle}>
                    Customers
                </NavLink>
                {" | "}
                <NavLink to="/about" activeStyle={activeStyle}>
                    About
                </NavLink>
            </nav> */}

            <nav>
                <img src={LogoPng} className="logo" alt="" />
                <ul>
                    <li><Link to="/" className="nav-link" activestyle={activeStyle}>Home</Link></li>
                    <li><Link to="/customers" className="nav-link" activestyle={activeStyle}>Customers</Link></li>
                    <li><Link to="/about" className="nav-link" activestyle={activeStyle}>About</Link></li>
                </ul>
                <img src={MoonPng} className="dark-icon" id="icon" />
            </nav>
        </>
    );
};

export default Header;