import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="company-logo">D</div>
            <nav className={`navbar ${isMenuOpen ? 'show-navbar' : ''}`}>
                <ul className="nav-items">
                    <li className="nav-item"><Link to="#" className="nav-link">HOME</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">OFFER</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">SHOP</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">CONTACT</Link></li>
                </ul>
            </nav>
            <div className="menu-toggle" onClick={handleMenuToggle}>
                <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
            </div>
        </header>
    );
};

export default Header;
