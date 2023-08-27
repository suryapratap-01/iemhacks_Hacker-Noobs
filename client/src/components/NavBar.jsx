import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faScaleBalanced,faGavel,faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const NavBar = () => {
    return (
     
        <nav className="Navbar_items">
            <h1 className="Navbar_heading">Samvidhan.Ai  <FontAwesomeIcon icon={faScaleBalanced} className="Navbar_logo" /></h1>
              
            <ul className="Navbar_menu">
              <li>
                   <a className="Navbar_links">
                   <FontAwesomeIcon icon={faHome} />  Home
                   </a>
                </li>
                <li>
                    <a className="Navbar_links">
                    <FontAwesomeIcon icon={faGavel} />  Legal Laws
                    </a>
                </li>
                <li>
                    <a className="Navbar_links">
                    <FontAwesomeIcon icon={faRightToBracket} />  Login/SignUp
                    </a>
                </li>
            </ul>
        </nav>
        
    )

};

export default NavBar;