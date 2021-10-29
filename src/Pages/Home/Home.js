import React from 'react';
import Footer from '../Footer/Footer';
import Application from './Application';
import ContractBanner from './ContractBanner';
import Hero from './Hero';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
           <Navbar/>
           <Hero/>
           <ContractBanner/>
           <Application/>
           <Footer/>
        </div>
    );
};

export default Home;