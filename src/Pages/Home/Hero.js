import React from 'react';
import './Hero.css';
import heroImg from '../../food_delevari_media/hero-model-byke.png';

const Hero = () => {
    return (
        <div id="hero">
            <div className="hero-content">
                <h1>Express</h1>
                <h1><span>Home Delivery</span></h1>

                <p>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>

                <button>see more</button>
            </div>
            <div className="hero-img">
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;