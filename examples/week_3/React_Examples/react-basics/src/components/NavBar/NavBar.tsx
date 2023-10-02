import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <Link className="nav-link" to="/">ComponentOne</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/lists">Lists</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/props">Props</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/hooks">Hooks</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/class">Class Component</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar