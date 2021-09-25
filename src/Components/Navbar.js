import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const handleCloseMobile = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 950) {
    //         setButton(false)
    //     }
    //     else{
    //         setButton(true)
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    //   }, []);

    // window.addEventListener('resize', showButton);

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
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className="nav-links" onClick={ handleCloseMobile } >
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/project" className="nav-links" onClick={ handleCloseMobile } >
                            My Project
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={ handleCloseMobile } >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>  
        </nav>   
        </>
    )
}

export default Navbar
