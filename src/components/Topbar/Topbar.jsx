import React from "react";
import './Topbar.css';
import technelasLogo from './newicon1.png';
import { Link } from "react-router-dom";



export default function Topbar(){ 
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light main-bg-color navbar-border ">
        <div className="container">
            <Link to='/' className="navbar-brand navbar-logo"><img src={technelasLogo} alt="Logo" /> Technelas </Link>
            <button className="navbar-toggler margin" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end navbar-style" id="navbarNavAltMarkup">
                <ul className="navbar-nav fs-5 gap-4 ">
                    <li className="nav-link btn-animation " href="#">
                        <Link to='/cadastro' id="btn-header" className="btn fs-5 px-4 py-2">Cadastre-se</Link></li>
                    <li className="nav-link btn-animation" href="#"><a id="btn-header-line" className="btn fs-5 px-4 py-2"
                            data-bs-toggle="modal" data-bs-target="#exampleModal">Log in</a></li>
                </ul>
            </div>
        </div>
    </nav>
    )

}