import React from 'react';
import Footer from '../Footer/Footer';
import Application from './Application';
import ContractBanner from './ContractBanner';
import Hero from './Hero';
import Navbar from './Navbar';
import OurFoods from './OurFoods';

const Home = () => {
    return (
        <div>
           <Navbar/>
           <Hero/>
           <OurFoods/>
           <ContractBanner/>
           <Application/>
           <Footer/>
        </div>
    );
};

export default Home;