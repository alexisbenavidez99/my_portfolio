import React from 'react';
import { Link } from "react-router-dom";

export default function NavTabs() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#about-me">
                        <p className="name-icon">Alexis</p>
                        <p className="name-icon">Benavidez.</p>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="nav">
                            <li className="nav-item px-2">
                                <Link to="/about"> About </Link>
                            </li>
                            <li className="nav-item px-2">
                            <Link to="/projects"> Projects </Link>
                            </li>
                            <li className="nav-item px-2">
                            <Link to="/resume"> Resume </Link>
                            </li>
                            <li className="nav-item px-2">
                            <Link to="/contact"> Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}