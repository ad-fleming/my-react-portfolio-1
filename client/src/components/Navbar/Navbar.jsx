import React from 'react';
import { NavLink } from "react-router-dom"


export default function Navbar(){

    return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand ml-2" id="myName" >Alexander Fleming</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
        </ul>
        </div>
    </nav>
    )
}