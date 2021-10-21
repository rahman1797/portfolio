import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const handleCloseMobile = () => setClick(false);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-icon" onClick={ handleClick } >
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-links" onClick={ handleCloseMobile } >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="#experience" className="nav-links" onClick={ handleCloseMobile } >
                            Work Experience
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links" onClick={ handleCloseMobile } >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>  
        </nav>   
        </>
    )
}

export default Navbar
