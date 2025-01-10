import './Footer11.css';
import { Link } from 'react-router-dom';
import logoO from '../assets/logo1.png';

function Footer() {
    return (
        <div id='contact' className='footer-container'>
            <section>
                <h1 className='hero-heading2'>DAVEEDO</h1>
            </section>
            <section className='footer-content'>
                <div className='footer-content-logo'>
                    <img className='footer-content-logo-img' src={logoO} alt="logo" />
                </div>
                    <div className='footer-link-items'>
                        <a href='#home'>Home</a>
                        <a href='#about' className='nav-links'>About</a>
                        <a href='#works' className='nav-links'>Works</a>
                        <a href='#clients' className='nav-links'>Clients</a>
                        <a href='#contact' className='nav-links'>Contact</a>
                    </div>
            </section>
            <section className='social-media'>
                <p className='copyright'>
                    © 2024 Daveedo Productions. All rights reserved.
                </p>

                <div className='dev-all'>
                    <a href="https://ankushs.me" target="_blank" rel="noopener noreferrer">
                        <p className='developed'>Ankush Singh</p>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Footer;


