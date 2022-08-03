import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Reciter</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Api</Link></li>
                        <li className="nav-item"><a href="https://alquran.cloud/api" className="nav-link px-2 text-muted">Code</a></li>
                        <li className="nav-item"><a href="https://github.com/mahmoudrabbas" className="nav-link px-2 text-muted">Developer</a></li>
                    </ul>
                    <p className="text-center text-muted">© 2022 Holy Quran</p>
                </footer>
            </div>
        </>
    )
}

export default Footer