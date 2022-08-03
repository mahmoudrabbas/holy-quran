import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar align-items-center navbar-expand-lg bg-light sticky-top">
            <div className="container">
                <Link className="navbar-brand text-dark" to="/"><i className="fa-solid fa-book-open text-success"></i> Holy Quran</Link>
                <button className="navbar-toggler justify-content-center align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Surahs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Ayahs</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Recitation
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/">Tilawat</Link></li>
                                <li><Link className="dropdown-item" to="/">Tajweed</Link></li>
                                <li><Link className="dropdown-item" to="/">Reciters</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header