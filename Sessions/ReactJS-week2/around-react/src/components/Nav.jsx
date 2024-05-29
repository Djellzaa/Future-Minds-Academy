import React from 'react';
import logo from '../assets/images/logo.svg';
import sun from '../assets/images/sun.png';
import moon from '../assets/images/moon.png';


export default function Nav(props) {
    return (
        <div>
            <header className="row align-center">
                <div className="col">
                    <nav className="navbar gap-2">
                        <img src={logo} alt="Around-Logo" className="navbar-logo" />
                        <ul className="navbar-menu remove-tablet">
                            <li><a href="/" className="active">Home</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/blog-details">Blog Details</a></li>
                        <li><a href="/contact-us">Contact us</a></li>
                    </ul>
                    <div className="navbar-button remove-tablet">
                        <img src={sun} alt="Sun Icon" />
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <img src={moon} alt="Moon Icon" />
                        <button className="normal-btn button-primary">Contact us</button>
                    </div>
                    <div className="nav-burger block-tablet">
                        <span className="material-icons" id="menu-icon">menu</span>
                    </div>
                </nav>
        </div>
            </header >
        </div >
    );
}
