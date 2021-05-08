import React from 'react';
import logo_white from '../../../assets/babys/logo_white.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
            <div>
                <img src={logo_white} />
            </div>
            <div className = "nav_white">
                <span>Breakfast</span>
                <div className= "circle_white"></div>
                <span>Brunch</span>
                <div className= "circle_white"></div>
                <span>Lunch</span>
                <div className= "circle_white"></div>
                <span>Dinner</span>
            </div>
            <div className = "author">
            <div>Author: Darko Milisavov</div> 
            <div>darko_milisavov@hotmail.com</div>
            <div>2021</div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;