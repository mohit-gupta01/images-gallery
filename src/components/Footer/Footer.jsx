import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container top-footer">
                <div className="footer-item">
                    <h2 className="footer-title">ABOUT US</h2>
                    <div className="footer-items">
                        <p className='about-para'>Anasha Art is an online art gallery that makes buying high quality Indian art really easy. We operate out of Jamshedpur and Gurgaon. All the artwork in the gallery has been diligently curated and every effort is made to bring together an eclectic mix of high quality art.</p>
                    </div>
                </div>
                <div className="footer-item">
                    <h2 className="footer-title">QUICK LINKS</h2>
                    <div className="footer-items">
                        <h3>About Us</h3>
                        <h3>Contact Us</h3>
                        <h3>Home</h3>
                        <h3>Shop</h3>
                    </div>
                </div>
                <div className="footer-item">
                    <h2 className="footer-title">SUPPLIERS</h2>
                    <div className="footer-items">
                        <h3>About Us</h3>
                        <h3>Contact Us</h3>
                        <h3>Home</h3>
                        <h3>Shop</h3>
                    </div>
                </div>
                <div className="footer-item">
                    <h2 className="footer-title">INVESTMENT</h2>
                    <div className="footer-items">
                        <h3>About Us</h3>
                        <h3>Contact Us</h3>
                        <h3>Home</h3>
                        <h3>Shop</h3>
                    </div>
                </div>
            </div>
            <div className="container end-footer">
                <div className="copyright">Copyright © 2024 - <b>MOHIT GUPTA</b></div>
            </div>
        </footer>
    )
}

export default Footer;