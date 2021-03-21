import React from 'react';
import { Link } from 'react-router-dom';
import"./Header.css"


const Header = (props) => {
    const name = props.loginUser.displayName
    const username = props.loginUser.name
    return (
        <div className="bg-light">
            <nav className="navbar navbar-expand-lg navbar-light component">
                <Link className="navbar-brand" to="./home">Great Raider</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <h1 className="name">{name}{username}</h1>
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

{/* {
 props.loginUser.displayName == "" > ""? <li><h3>{props.loginUser.displayName}</h3></li>:
props.loginUser.name == "" ? <li><h3>{props.loginUser.name}</h3></li>:
<li className="nav-item"><Link className="nav-link active" to="/login"><b>Log In</b></Link></li>
} */}