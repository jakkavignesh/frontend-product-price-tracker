import React from 'react'
import {NavLink} from 'react-router-dom'; 
import emailLogo from './email-png.png';
import vignesh from './vignesh-image.jpg';
import uday from './uday-image.jpg';
import vivek from './vivek-image.jpg';
const About = () => {
    document.title = "B15 Product Price Tracker | Home";
    const emailAddress = 'b15productpricetracker@gmail.com';
    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };
    return (
        <>
        <div className="home-container">
            <div className="about-heading">Developed by</div>
            <div className="card-container">
                <div class="card">
                    <img src={vignesh} alt="" />
                    <p class="heading">Jakka Vignesh</p>
                    <p>B.Tech CSE</p>
                </div>
                <div class="card">
                    <img src={uday} alt="" />
                    <p class="heading">Ch Uday Kiran</p>
                    <p>B.Tech CSE</p>
                </div>
                <div class="card">
                    <img src={vivek} alt="" />
                    <p class="heading">Ch Vivek</p>
                    <p>B.Tech CSE</p>
                </div>
                <div class="card">
                    <img src={vignesh} alt="" />
                    <p class="heading">D Sanay</p>
                    <p>B.Tech CSE</p>
                </div>
                <div class="card">
                    <img src={vignesh} alt="" />
                    <p class="heading">K Surya Chandra</p>
                    <p>B.Tech CSE</p>
                </div>
            </div>
            <div className="footer-rights">
                Copyright © jakkavignesh | All rights reserved
            </div>
        </div>
        </>
    )
}
export default About