import React from 'react'
import {NavLink} from 'react-router-dom'; 
import emailLogo from './email-png.png';
const Home = () => {
    document.title = "B15 Product Price Tracker | Home";
    const emailAddress = 'b15productpricetracker@gmail.com';

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };
    return (
        <>
        <div className="home-container">
            <header>
                <h1>Welcome to Product Price Tracker</h1>
                <p>Track prices and save money on your favorite products!</p>
            </header>
            <section className="features">
                <h2>Key Features</h2>
                <ul>
                    <li>Track prices of products from various online e-commerce websites.</li>
                    <li>Receive price drop notifications via email.</li>
                    <li>Compare prices and find the best deals.</li>
                </ul>
            </section>
            <section className="get-started">
                <h2>Get Started</h2>
                <p>Start saving money today with these simple steps:</p>
                <ol>
                    <li>Sign up for a free account.</li>
                    <li>Search for the products you want to track.</li>
                    <li>Receive notifications when prices drop!</li>
                </ol>
                <NavLink to="/signup">
                    <button className="btn">Sign Up Now</button>
                </NavLink>
            </section>
            <section className="about-us">
                <h2>Developed by</h2>
                <p>Jakka Vignesh</p>
                <p>Ch Uday Kiran Reddy</p>
                <p>Ch Vivek</p>
                <p>D Sanay</p>
                <p>K Surya Chandra</p>
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <p>
                    Have questions or feedback? Reach out to us at{' '}
                    <span className="email-link" onClick={handleEmailClick}>
                        <img src={emailLogo} alt="Email Logo" className="email-logo" />
                    </span>
                </p>
            </section>
            <div className="footer-rights">
                Copyright © jakkavignesh | All rights reserved
            </div>
        </div>
        </>
    )
}
export default Home