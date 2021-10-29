import React from 'react';
import './Footer.css';
import callUs from '../../food_delevari_media/footer-banner.jpg';

const Footer = () => {
    return (
        <div className="footer-warp">
            <div className="footer">
                <div className="footer-call-img">
                    <img src={callUs} alt="" />
                </div>
                <div className="footer-call-content">
                    <h1>call us</h1>
                    <h2>+34 45567678</h2>
                </div>
            </div>
            <div className="copy-right">
                <p><span>Like-themes</span> All Right Reserved - {new Date().getFullYear()} <span>Purchase</span></p>
            </div>
        </div>
    );
};

export default Footer;