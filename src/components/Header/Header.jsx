import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="company-logo" style={{ cursor: "pointer" }} onClick={() => { navigate('/'); }}>M</div>
            <div className="nav-search">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <IoSearch />
                </div>
            </div>
            <nav className={`navbar ${isMenuOpen ? 'show-navbar' : ''}`}>
                <ul className="nav-items">
                    <li className="nav-item"><Link to="#" className="nav-link">HOME</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">ABOUT</Link></li>
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
