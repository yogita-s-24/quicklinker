import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg shadow" style={{backgroundColor: "#845EC2"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-light fw-bold" to="/">🔗QuickLinker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5 fw-bold">
                                <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item me-5 fw-bold">
                                <Link className="nav-link text-light" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item me-5 fw-bold">
                                <Link className="nav-link text-light" aria-current="page" to="/login">Login</Link>
                            </li>
                            <li className="nav-item me-5 fw-bold">
                                <Link className="nav-link text-light" aria-current="page" to="/signin">Signup</Link>
                            </li>


                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">

                                <li className="nav-item me-3 fw-bold">
                                    <Link className="nav-link text-light" aria-current="page" to="/user">User!</Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar