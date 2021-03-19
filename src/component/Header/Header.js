import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="./home">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="home"><b>Home</b> <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/destination"><b>Destination</b></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link active" to="/blog"><b>Blog</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/contact"><b>Contact</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/login"><b>Log In</b></Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;