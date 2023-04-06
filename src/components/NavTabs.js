import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {
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
                            <li className="nav-item">
                                <a
                                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                                    href="#about-me"
                                    onClick={() => handlePageChange('About')}
                                >About Me
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                                    href="#projects"
                                    onClick={() => handlePageChange('Projects')}
                                >Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                                    href="#contact"
                                    onClick={() => handlePageChange('Contact')}
                                >Contact Me
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                                    href="#resume"
                                    onClick={() => handlePageChange('Resume')}
                                >Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}